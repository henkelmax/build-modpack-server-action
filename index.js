// @ts-check
const core = require('@actions/core');
const genertateServer = require('curseforge-modpack-server-generator');

try {
    const modpackPath = core.getInput('modpack-path');
    const outputPath = core.getInput('output-path');
    console.log(`Modpack path set to '${modpackPath}'`);
    console.log(`Output path set to '${outputPath}'`);

    core.startGroup('Building Server');

    genertateServer(modpackPath, outputPath);

    core.endGroup();

    core.setOutput('path', outputPath);
} catch (error) {
    core.setFailed(error.message);
}