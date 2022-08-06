module.exports = {
    "*.ts": [
        "eslint --cache --fix --ext .ts",
        () => "npx tsc -p ./tsconfig.json --noEmit"
    ],
    "*": [
        "prettier --write"
    ]
};
