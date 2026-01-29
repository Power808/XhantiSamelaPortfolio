#!/usr/bin/env node
/**
 * Simple visual-check script to enforce the manifest rules:
 * 1. No AI-branded icons.
 * 2. No prohibited colors.
 */

const fs = require('fs');
const path = require('path');

const BANNED_KEYWORDS = ['robot', 'brain', 'ai-icon', 'artificial-intelligence'];
const BANNED_COLORS = ['#ff00ff', '#00ffff']; // Example "neon AI" colors

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.resolve(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next')) {
                results = results.concat(walk(file));
            }
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, '../src'));
let errors = [];

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');

    // Check for banned keywords
    BANNED_KEYWORDS.forEach(word => {
        if (content.toLowerCase().includes(word)) {
            errors.push(`Banned keyword "${word}" found in ${file}`);
        }
    });

    // Check for banned colors (simple hex check)
    BANNED_COLORS.forEach(color => {
        if (content.toLowerCase().includes(color.toLowerCase())) {
            errors.push(`Banned color "${color}" found in ${file}`);
        }
    });
});

if (errors.length > 0) {
    console.error('Visual Policy Check FAILED:');
    errors.forEach(err => console.error(` - ${err}`));
    process.exit(1);
} else {
    console.log('Visual Policy Check PASSED.');
    process.exit(0);
}
