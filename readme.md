# Build Modpack Server

This action builds a server from a [CurseForge](https://www.curseforge.com/minecraft/modpacks) Minecraft modpack zip.

## Useful links

- [CurseForge Modpack Server Generator](https://github.com/henkelmax/curseforge-modpack-server-generator)
- [Upload CurseForge Modpack GitHub Action](https://github.com/henkelmax/upload-curseforge-modpack-action)
- [Example Usage](https://github.com/henkelmax/delivery-inc/blob/master/.github/workflows/release.yml)

## Inputs

| Name           | Description                                | Required | Default Value          |
| -------------- | ------------------------------------------ | -------- | ---------------------- |
| `modpack-path` | The path to the modpack zip                | Yes      | `./modpack.zip`        |
| `output-path`  | The path where the server should be stored | Yes      | `./modpack-server.zip` |

## Outputs

| Name   | Description                |
| ------ | -------------------------- |
| `path` | The path to the server zip |

## Example usage

```yml
uses: henkelmax/build-modpack-server-action@v1.0.0
with:
  modpack-path: "./modpack.zip"
  output-path: "./modpack-server.zip"
```
