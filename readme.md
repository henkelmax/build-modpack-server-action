# Build Modpack Server

This action builds a server from a CurseForge Minecraft Modpack zip.

## Inputs

### `modpack-path`

**Required** The path to the modpack zip. Default `"./modpack.zip"`.

### `output-path`

**Required** The path where the server should be stored. Default `"./modpack-server.zip"`.

## Outputs

### `path`

The path to the server zip.

## Example usage

uses: henkelmax/build-modpack-server-action@v1.0.0
with:
  modpack-path: './modpack.zip'
  output-path: './modpack-server.zip'
