/*
 * Auto Bot
 *
 * by Jorge Gonzalez Garcia <jorge@garragames.com>
 *
 * /

/**
 * Custom graphic block
 */

// import { gestures } from "./enums.d.ts"

let gestures = {
    "*": {
        "namespace": "gestures",
        "dataEncoding": "base64"
    },
    "shake": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA/CAYAAABQHc7KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAGSWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNTIiIGV4aWY6UGl4ZWxZRGltZW5zaW9uPSIyNjAiIGV4aWY6VXNlckNvbW1lbnQ9IlNjcmVlbnNob3QiIHhtcDpDcmVhdGVEYXRlPSIyMDIzLTA1LTMwVDAwOjQzOjQ5LTA2OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMy0wNS0zMFQwMDo1MDo0MS0wNjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMy0wNS0zMFQwMDo1MDo0MS0wNjowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJEaXNwbGF5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4ZGFkMTY0LWY1NTgtNGI1Yy05ZjFlLTM0MDZjYTdjOTkwMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjcxM2U4YTQxLTU3YWMtNzQ0NC05MzI3LTgwMzY0YzczNGZhMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQxNjg0NDgyLTg1ZjgtNGY5Yi1hN2EyLTNmODY1YmU5ODkyOSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQxNjg0NDgyLTg1ZjgtNGY5Yi1hN2EyLTNmODY1YmU5ODkyOSIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0zMFQwMDo1MDo0MS0wNjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ4ZGFkMTY0LWY1NTgtNGI1Yy05ZjFlLTM0MDZjYTdjOTkwMiIgc3RFdnQ6d2hlbj0iMjAyMy0wNS0zMFQwMDo1MDo0MS0wNjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LHCVwAAG2xJREFUaIG9m3eUVdXVwH/n3HvffWXmvakMaDCIQxua9AEEAigICAgqahS7CRoTo8YkZiX5vi8rRU1VVzSWiMYUIyFKr9J77026UoQZZubNvH7vOd8f9w0OMhSFZK915s3MfeecvffZe5/drlBqP/9JEAgckUQnBRkj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" },
    "freefall": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVR4nO2b4XWbMBSFP3r6P2wQOkGcCUonqDtB0wnqbuBO0GSCJhvYG5AJiiconaD2BK8/JGpZAVtIYJGEew7HRAi9x0W670kiiYjwmvEmtgOxMREQ24HYmAiI7YCJBMoEVme1OaYokIAACCTnsjmqHtCEBIoEloO1P/YeMHSvGH0PGBoTAbEMJyAJlLHs//cjlga4jvdJAwbGREBsB2JjIiC2A7ExERDR9hr441DvDngcyonRzwWGxqsfAm9jO2DhOzA7p8G+hkAO3AOX+u8NUKFy/dI4Hx36ICBDPdwFStQq4H1L3Ud9vQIK4zwa+iBgAfwAHoAbozzTR278XtKMaMT0QcA98Bl4R7PTqa6TsicjQy1+ruhGTAlsQx0+gIiEHqWIVC3Xcn1NRGSpyzLjnhsR2Uo3bEWkEJFbEVloG6mv/6EPn2qnVg3Xbi3Hc88HdkUhHkSEEpBr40ujbCbqDTc5ODSKBh+PHqGJUK5/C/27AH4BVw1168iwQY1tlzS4K9qiTytCE6E6aalQJBxzYI0iqLLKcw4jxgwVUn2w63pDaBQwFfmY02aInKEiAux7jo0URdbiRLs21sC8Q/0gDcgcx2UdIVJp1oFKly9FZC5KQ0w96QJTiwYXwbmjUze6/tJ66GOoRBFs33cK+RF/exfB3LFeZdW/A25P3HNp1Lnv4FPn+UaICPrO2r4eufaA0oWfwEddVjm2u8EjSwzpAa4hpybq1FsHJWB1vTpMZo52vGabvgTYb38NfEO9BRtLlKqvgA+ot9xUD5Ti16pfE5E7+uQ33e4qGvpYGMJTGuVtql0aooZVf66FbiUqGhSyF85UTgtmDTN6OB++GmD2gMI4T2nGFfAb9fbLhqPps5hUt902U7Th1QN8E6GSw3T3C0qAbnF3GFTm1rRqNEclTq5J0CPuQ+UAPgSkwF8fYz1hw9O5xh0qa+wMHxE866KlgR1wre1/sq4Vvo36EJD7GgtEPVTgqWZ4L7g+px4wY58TLI3yHQHrhz5RIPc1FogLVCSxNaAIabRrD8jwn6v3BVsAg/YbfAgYG4qQm1/C3uBZe0BBex4fA14zQBO+YbDes++8BtczgvcbfaLAlsOsK0WFqDpM1efnEMtgAob8QCLjcG8ww2PZ+gSuCSQhxhciGf0Qs6N99umMGB9IVOz3EUxkHBIzo3mDpYbLCtNJjOoboRbY2gJqobSXf615DgQMipeQCAVhIiC2A7ExERDbgdh49QT8A9YP5MUcc2wYAAAAAElFTkSuQmCC"
    },
    "frontsideup": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAADSUlEQVR4nO2a63XaQBCFP+Xkv9WB1QG4AquD0EFwBy6BElwC7oBUEFxBoAKLDnAFkx+jjVZCbyQNOeieswehx+7cuzOzDykQEe4Z36wNsMYsgLUB1pgFsDbAGqYCBLAJYGNqg9UwGMAS+JP+fRI4WNhh6QHbiuNJYSJA6vYL79TCKhQmD4EAIuCz4vLkoWDhAduaa29TGeEwqQABvALPNbc8p/dMBrNRACAAARAIrGy4+4nQd8vGLXve4e49wHoqLC4PWOHuPWDOAdYGWGPOAZaN3wLmHGBtgDXmHGDZ+C3g7nPAWAKE6Lp+DTym577Q3R5XEmA/UvutMcZ+wBIl9gC8k5GMgDj9ffTuP5GJkZAJNAmGFsCRByVbR+QV3QjdoaIsUdEcjuQFcV4zKIYUoIl8mJ5fpeUBeCHbI1yhIXNOy5q8IA4fqBAJmdckfY0eSoAq8hFKLAZ+FJ75hfb+qnDtRD5E2sDPL4l3fG56cAgBiuRDMtKL0iemgxNm75UcrhXAT3hHtMfL3LZo1I7MfR2itD5Xmurpg4th9xoBfPJt8IUmvi35EQHyrusQkokRoV7VNTSK7YcXZ0WkT1mKyFna4yAiYVq2Le7dichGRFYiEnntvnZo08dZ1OYLLlOQT0SJIyJ77/y68L8OK6/9Q4e2RWrISw8Bysg3ibHxnm+LveR729URtmivaFsleekoQJH8oVB5Vc/svHtW6f+kheEOiWRh0BQ+xTpqyUsHAcp6PvauN8XmTvJu7EosGgpvor1eJL4R7fVI2oeLSEvyItJqFKjL9h90H7JOXE5vq6bMS3Tk+Nmh/i+ap+H/0CRA16HuGhzJz9z6zAU6kYd6AaYk3xZuZgflr9mf6LiSrNoPCNHZ2i2Rf0cXSA5n8va90GMZXbYlFqI9f82sawy4r0eWXHaOv6rshLIQiIHffSozQm/yUO4BBzS7/w+4ijw0jwIxuhCJ0uOxVml9cDV56LcaLK7Sxly+VmEQ8jDsllhEfpkbUf9FWF8MRh6m+UosIr/REdF/p2hQ8mD7mZwfQjGX2+U+TugcYD+0EabfCVYgJgsh0DF/tPcEtyjApLj7l6OzANYGWGMWwNoAa8wCWBtgjVkAawOs8ReItTjrXj7vnAAAAABJRU5ErkJggg=="
    },
    "backsideup": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACbUlEQVR4nO2a75GbMBDFf2TyPXRwdHCkgqOEdJCkg5TgElyCS0gJTgVxKojdwV0Fmw9CA7H5Zwx6HOjNMCNAg/Y97a6EpMTM2DI+qA1QIwqgNkCNKIDaADWkAiSwS2AntUE1DCaQA7/L288GJ4UdSg84tJSDQiJA6fbPtUfPqlAIHgIJZMDfltfBQ0HhAYeOd/tQRngEFSCBH8BLR5WXsk4wyEYBgAQMwCBR2bD5idBHZePKnvfYvAeop8Lm84AKm/eAmAPUBqgRc4Cy8SUg5gC1AWrEHKBsfAnYfA6YS4AU91//DXgqn73hVnv8dQaOM7U/GHOsB+Q4Yp8G1r9QiXGmEigIphbgXvJd+MP/gvjypJhSgCnJX+MN+MJtyKTldR774alGgbnJFzSTP+JWmA34OerrZvbolZvZq82HfUObqZmdanVeSzua7EvNbGdmRdP7R0Ngzp6v40KVCzJcOPg2vYc05QfvJX4T5nbY7eldZc8PQVfPY2aHq7o3dcbmgFA934c97SPDAfhalr2X3GBMCCyFvEd9gnXGhUhB5fZdIXK3AEsj34dO8nDfMLg68jBcgFWSh2ECrJY89AuwavLQLcDqyUO7ACluHH0v5MGtP9z9t9gkwPX08T3gOyMPWjUJkLMR8tAswAn4NfaDgfEQeeifCRa4qWVWlnOWkxceJg/j/gVSnBA5ThhfDinMJORh2iWxjMpTfLnrRNhYTEYewpwSy6i8xHvN2CQ7KXnQHpOrh1BRlp9a6l5wewzHqY2QnhNsQUEVQuAWO2fbJ1iiAEGx+c3RKIDaADWiAGoD1IgCqA1QIwqgNkCNf+aBYPgHiIEjAAAAAElFTkSuQmCC"
    },
    "impact3g": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEWklEQVR4nO2a/5XiNhDHP87L/0sqWKeCdQdxB6GDkArCVXCkA0rwdcBWcN4Kju3A2wFUMPljpEMI/5AtEXMc3/f8hKVhNJoZjWYEmYjwM+OXuQWYGw8FzC3A3HgoYG4B5sZDAXMLMDceCphbgGsig0UGVR/Nr/+TLHOhAhZ9BHfrARksgT+H6O5SARnkDLi+xV0qAF38Uwjh3SkggzXwRyj9XSkggwLYjPnOXSmAEa5vcdMKyGCZwSqQdgO8tAzlvV8UkZt9ECnMS41I0UNX9jHqmyO79SuxDFwB/wW2AgdnfAHsgecuHgJZ5wRzWznAC2qvs0GkdMa3Q0z6hm86BhjsTXs07TPwNYOdyfb+8ehfR3Gf28IBHrA0L4Wxft8XGkQWd+kBom0BvHfQHYGlGx9CkEoBOVCjAetgPm/RrKxkoCLrg0CDcX+zuJJ2N1/L5XYJmCCNq+7V06QRkVpEDnKJgxnbishanEAWsA12LX2V07H1xs4CZx/vFPcBBZqAvKJByWJhxuxTmtbP0z9QK9emtZ9dVP6kAqtMaUtRT5uGBNZfGQt3WXRprL8077mIVKJWrVs8xcJ608bMMcZj/KOzL4mKVsDWCLzw+hfOmJiFL8zCxYy1bZUhuIpZGr7+ovzc4IBuu6soYG8et68wglocRC3o9qXEylvUpkPYHZ6hUihARF3avm9aBJxi6TFofLnQ+qBqEfiAs51ia4ES+Ap8AnbmaavIQI+mCj2qcs6D5KgStgOt+X6mMu68OY5o8NzHngKFaXN0YV0LeUXL2q4kxT8xlj282vDhd5giaQ18Nl1HjJFEW6WL9IAdwzev76gVQGt2q7SGy+PPIqffm3x8wbk3MFavHBl3cnm0Ki63yKgnJKjZ468OoLXR3Z4iobHje4RHZG1Ogc6jz31iFr8IFM6nLQMWZpWwHaBzeU5aR0wtUI6gdWuBivb9/YZeeLi8dy10bahHyHKGGAUUwyTf6Rp0gdB9c2ODn4uQIuptmKQbqTzgiFqvrVTdmHaJBquucvaJU9CrTLsKkGM/TNKNmFPgwMmVfzPvBfCthfYsShsUaLS3R5+1dmWeLl4+/ibwZ7A2TFWAK9yRk/B9Qn+ge7pBrVYP8K8JywV+5/wIHYWpiZC7/584ZYGbnu88c3l/55bCNkkqgL8C5TgSsXiY7gFbLhdzbbyhnvbi9ZUxTKcGwahJJ+ALpwsVN+rXsYynKiA0RU0FNx9w64k6lvGUGFDGTjoBG04Xom7tEXUEwjQFhCZAKfGClt0uPhh5Bd6GKVugjJ00EeoUTKYoYPIdf2JEuz9MU0CdYuIESKKAmDxgRZqrrKno/sl7DJOIWgA0l8/RuGA/B/9BKQLRCZBF7J1gQ/svOTnXVUwS94fr/VW2oVsx7uVnzrSkKpkCbuUvMn5pnNOtmHcS5iK3ooAuuIoBTXwqEiRAFreugKvjR/iHyFXxUMDcAsyNhwLmFmBuPBQwtwBz4z9jSdC1TZEC4AAAAABJRU5ErkJggg=="
    },
    "impact6g": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEjElEQVR4nO2a0ZGkNhCGP1x+XxzBkcGNI7AcgdcR3GRgQsAReJwBm8FkYDYDLgKzEdxMBO0HtQotIwZGaI6hvH8VBUhNq/UjtboRmYjwf8YPaxuwNj4IWNuAtfFBwNoGrI3NEZBBmVLf5ggAygx2qZRtigDt+CfApNK5KQKAvZ5NKoXZliLBDE7AE3AWyFPo3MwIyOAZ23mAp1R+YDMEYAnwYVIo3TIBw/sobIKAzDq/p0HxLyl0b4IARt52lmAaPDwBmfX2v41Um6X6VyMggyKbt5Rdm+tmqR1rjoAc+JZBPTGU91fqZvuBDEwwjxCR1Q5EGq+gQ2SPSO7VF4OHuoAiE9BrECkRqRFpvcpDQHZVAkyg4qSG77QTft1e6/2yWssPg86G9OYBG9YjQA3otBPHCeFO5afkxo4qVPwIq0AF5GKd3a/A24hcrecmoo03se1cYu0RoG+18a5zRKqx4YudGrc28nyl7SSdyEWklh6N3ldindTF3BsYUTGQwTpA5yQPg7qhHzjp1Cix/sCva661nSodroEvwBlogQL74cKHq2uBzrs+uXhAbLr7DpoFtmKfcWUH7DON1rVenbPF4We//kJ/IgIEO3d39J3I9d4dLqAZxvSjxNxqRGaJ/9crepHrcUSSKWB02Jcj9TsRaaX3wrleu2kyhpPKHERkL4H1PjCVDiG/MfHMYgJKNThkYOV1yNUf9L4Wu7Tdik6JqZSYndcZP1D6bgS4t+iXFWqkDyN2JNwDpXZmx3sH2UzZn4IA90bc/V7s8B0iVJYS/jLpk3AR/vrHj7c6mgFyrLc/6nXNeOoK8IL13IXeG8IrRgx2QCPQqjNsgM/AH5ldKergU9fYmXEYZb+eeMOt2GkxpasU+8ZiRstwaOf0ucEJz1cM5BYRUM0w7CS9M6rETpdGRI56/yyXxg0Dqym0I53L6XOHjjskQ80M4yqVPUwJSr9cOkPnOs1QmltgI0x/ZTgG5BYRMGeomoHs84yO1dI71DnYex3KsSHxUQnYY9Pu4JK4pPPFTOMcAQ7diFw36PAtbQTn95xjSTpsZsoVen7R85jH/0Qftp71POeboQulo7CEAH9r6gz8DXwNyJXe+U/g9YpO942v1vOczY/ozgOLpoDvAN0wz0eGeC2Xc7DQ5yqxzqmRPsR1uub4GCcfdSzJBv0Hf6LP3sYUnrEBU8t0xleo7OcZdvyuslGIJcAA/3j3r9hhWzLPaIdhKnxS3f5O8BR88m9GLAEl8Fdso5H4iu2ovxfwRu9koxDrBJP9ozMTr9qmoV9NYKkDJJ4As7ThG9F4191IeRRiskGXAX5PlPTfGv3trcUjIMYHGN47wDWRLVUQMwXM0kYTIRR03YxH2BmKRZNCSQwBXYqGE2Dx/Ic4AmpsTH+ekLs3khCwdGPE3/wovOu5UVwsziT6UfJef4o6YgyWmIJEf3UpXknkjJd+FR7DCeukmkF5oYdhGTFDvdF4lH+FC+YTc9b66ATIx6MQMIaCnhiHA4k6D49PwN2x5UAoCT4IWNuAtfFBwNoGrI0PAtY2YG38B6VuuBeejFXUAAAAAElFTkSuQmCC"
    },
    "impact8g": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAFVUlEQVR4nO2a7XHjNhCGH2Tuv5kKzFQgXgXHVHDq4HQVxCUoHSgVRK4gcgWhK4hUwUkVhK5g8wOABYMACRHUUTfxO4ORjY8F8AJY7C6hRIT/CxSUAkc376eZxhKFgkJBcwW5W2Dl598cAUANfFKwnEKYIXQPfAF2fvmtEgCwVVDkCFJQobf8AjiJJuINbpmAO/S2HQWlt/s/Rg7EjpWI3ExCpAgU1CPkbAMFy0jd+SfuDGYZKDgiUiS2LxHZhwpjbW7tCNSBvHtgPdRQ6bZ79Hn38RRtOPeqeysYXD2Tqp52DwPCVz1t55+4s337Ku0DbQrC591P5Y9wBOqB8oVyjoKCEq3Zvwy0O/jWn4sfiQCABwXlwHn30TF+XCiR2/AFlF6l+4Sqp8R6Fh9DBtBrv7dAgNnO37zsF85GzFicRMuO4kNmB70wE+sdgEEVyFsBGy5bbR+92x+uTAB68n+PaHcS2Blf4M+M/pvBGt/heku5pvz04LQ/juy8TRzf1QkoEGlNxhKRNSLNQMPCaV/3TbJH1i5lfFe/BgVazvd3IbAWqAUU8BH4CvwBHEydR9PGtm+A54DoA2HdYTF4/nUHV94BzkruEWkS6pWBvMqruLW7JGUXzXoEAlu5M8HE9laXrBKOR8dsnp0AZxKbkW1LPIcIrU9CDVrTVzAGMCcBxSWrkyBvSJkK+hbZENl5390SNKGqVlKVVL+sSwd/QBtXO6top7oFSrS2FrTgxnT0gHZcXoObkhHnc6H6b4AYFmjD6l8bdZ5qB1jP7IR2aiq6dvyLqbc3dfZMEP83nqFNnxKbPcmEBFTo6OsTb2P5hSmzqTZ5PjGWtMb82r9HwaxsbVLIXT6g7RBta0ygjFaiUUfKl6LNUquRSxHZirbUGonjaMrXpo+Y/JiC3AQK9nj2wRQEbMyAfcOjcMrETLwwExdT1vYQkELMUsKGU8g+aEM3wRQE7KV7tVVmoBat6BV086bEyplQQdeBaokEVacgQERvafv/OjDAMSt9CY5ynlBo60cjyrnxgNr87tFX4S6ieO7Qt8DWqesqydzIjxs0WXllh76QWC4B9i4u0Z3EJvJkBtZGyv0bY9kjK4ST83eJvkXsQiyU9kDXwZaxrZGYrELrw1608rNKsTFpK/q41NJVTqVplwr3CL6a3CnHIJeAFKVmr78moW4jmhREE5aqO14jSBInIfiNMWfyReLg/Lp1wsQsCZuBeq7M4Dh5G5LrRIlyfIH6grruQ4ct4fP9DPzuyU51mJqesh1aAQN8Vp6SzCEg1RmxrzRsWCsW5rbKz0XKC5FOuEzBUukXJi3wF2fCn/0+ptoBL+jVOwTqrc3vEniM1AE9SKu5t+Z3lTCO1ytOQa20F1qZ/CXwq4AyqRaPgBxnqOXM7M/mf+sY+XikO5kKfWXZq8+u9takmCwfX8l5SjOSAHdwL5wH3zfoE/o8Hhl2hStTnmIL/ELP198hjDWE3PN/h57Yjv6XHPfAb16e6wpbI6li+JO3xQsZk4fxO2BDdzLXxjN6py28vDpH6FglmNXpCDyaPiveav0mV/BYAlIeJkwJ1x5w/YkmV/AYHVDndjoCa/TEa+Czkx/18lIxhoAx0dhcLOh+Zj8R9y6TMeYI1LmdToRmCiFjCMh6wDwhsrc/jCOgmaLjCTAJATl2wIr8UFYO1CRCMnwBOD+Cqp2/U7/O5CDbALLIjQkeCX/JKbkuMZNsf7jeK7EjcWLc4GfJOKNqMgJu4qEkXde4JE7M0Nugi3ArBMTgEgPa8NkygQFkcesEXB239Fp8FrwTMPcA5sY7AXMPYG68EzD3AObGf4L8LJx8Ylq2AAAAAElFTkSuQmCC"
    },
    "tiltleft": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAD5ElEQVR4nO1b7XWbMBS99PR/2CBM0HiDsEG9QckG3qDqBu4EpRt4g+AN6AZ4AzLB7Q89HTA1BiEJuYnvORwsIYn3rt6HJJKEJD4yPsUWIDbuBMQWIDbuBIQcPAFUAlQJsJFyKeVtyPdagaS3C2QOsgK5lXIrDwspc1BuQB5AbnzKYXN99sxnCeARQAPgIOVUygDwQ+7GKh7lKgHUCbAhUHuW6To8zPoO5EF+FyBrYwET/VJpb/pu5aFa0wJcOxe9ikmlJ8aqpFCDTP8XAlIRuHIVWsYqIfEAEidukgCQKuRMCREEuQ9NgHUalOD1HcATAOU7Jg2wCTz+YgvYBbaAdC0XSMj5u8EEyAGAQBVoPlaHrQsoAK8JsA8gSxTMJiDRCxrjk1UQaSLAygUA7QbvyQVmL4UToIBe0jaBZIkCmxhQAHiV+5pIoYNvkJQ46gLi84de1bPcT+isYM/zNj6RA9gB+NqrO0JvpVtvb5mx4htrUAfKzTnJiuOo6XH7PKdBPfLQ9x6+INlcUbyPlo6bLxsC8gsPlCelU0vFh3CWY26jfa+igfsSOBXh24WK93GggzxzG6WiOKF9dKniGfUOz4fifSyOCzYNcyzfnmYkywklKjcOlsUFFzOec+XUJjomsKImp9+n4HULqaTf2Li7WyAgZzejQ0EbUfILtVU0Ul/3yNjPVG6MqJIz44Lv7wIF9CJJoVss5XI/AXiBXsjkAP7Ib7OQesL09wIzZgZ9kvww0u4b9H4lm5TYw2ynMjNmJgvqgGRmpxKL6FuFQdvr14oFpFdm1hYtJ4K2q+JKXlKK4qQ235pdULqk+BAVNWmZ9PWNgp4J2LFTPOP5jFN+b9j58phSB3YzZMYMhYsZYqny7Ame8l8FjcmTWqlhIDTEGStqGB6KnghoeW5SQ+XNJqkY1LfUFpHJZdxnLVx0gyXfBh8kAkPuT4Pnbe9ZKlfbKyuJ0mviJzqZz3GJlYmLcldX2B7625bTK0Hf6MeoUX2szwQBEDqf/5poZw5Onifa+cYb9Kn1HjMOTpYScIs4QStdwuLEyPffB8TACTqulEs62xKQXqg7yn1tUz9Cz7jTmaQtAcOT2Rd0zK/lGkfoGa98DObiAr/RKa+cJZn3PgXP3yVcCDDn9QXC5fU3aBNXCPRBxjYL5NAfR0LDKpW54NaywKJU5oJbIcAplbkgNgFeUpkLbAnIPb3XaypzwdoWECSVuWANAoKnMheEJGC1VOaCEASsnspc4JOAaKnMBbYENBfqoqcyF9gSUELvAbbQf9d/wA2kMhcsORF6V7j/01RsAWLjTkBsAWLjTkBsAWLjwxPwF0Pxx3Dj8Xp5AAAAAElFTkSuQmCC"
    },
    "tiltright": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAEIElEQVR4nO2a77WbRhDFf+Tk+6MD4wqsDowriFKBeRVE7oB0oFRg3IHSAelAr4KQDpQKbj7M7gHLgFj+CEnRPYejB+wuM5fZubPLiyTxf8ZPaxuwNp4ErG3A2ngSsLYBHhEUEZQRZO58765lSz53NQIiyCOoIti5Swnw0f0CbIDP/twRso/q+/NA0lUPpMT9lu5i6c4zpBwpbZwfkFKkuDFIPrM913Mc6YhUOYdSpAJpM6BvjLRv9PVjXex7SwRsGxeyiWP56DnhIupmCUDaUIf1bqrzbpzUOT/HWIs6H2NhK6TtQs/I3DOSMf2XVoENELu/Tws9Yw+8Aw6jel9hCsRLvf1GBJSMTIiR9DirwQgyQRHS5+eFbLk6IptiLxEQQsLNlMIz4Oh+NyGdHmYK+BJZUIX0e5gIcI4nEWQh64WHIcChAL4C26EdliBgiyUkuaNkwSVtYxldUtccO38tgrx3gJl1OZd00veavJWt+CrNULq21AFpT4OLa4W5DImdk0d1PzBtEJG7PnORsO+4ubtGIbTBytB3wBv9JW+JJagUC9e9OyaVyZGNdXQ2eLxpiCROZD9zIR8CP0USSYU7L3oiZ+xUGFQaT3G+CHS8SUCpesrojIjRmxzYDpII2DUaMwUSLOQ/BPb7F5MpH+4JphgvLW3/wrJ3GfIANxUOsik2DIEsp/ox5DN3L5F06HnrPultZMlp6/pkssTYhlILKMdZ1AxunHcYmZ61a8sJhWqS2u6lztGy4xnVUkQMaRSr+802nch72lUtBOSqc4Cc86lquewaJ9e8EtrbYHNm5BT4KMgutDu6Nht1E3HSTET03cwULnGXcHBGp7qsIpWMhEuEFZogoV030jC/gtB8e4naichlBPia4RIJcuMER0TXjXyUa2E4SdrLSEhUryPOkTubuqZDE0cFEtC1GgzS35F4AX4D/sY0v8Bqg9+Bfxrt/E7PEJs+EFID0L0cLoFXrHi5Bj5jRBTU64XIHX67O2irayguVYIx9vV2R3vFthTeMMdLZ0MG/DKw7yshO8MD50qs/ortluBzxqQccI4T9Rx95fs5etcYsyVWYER8whYtd40pe4IllnE/AX/OYUwAvgC/MsMLmGNTtMSWte+BbzOMNwRHLEmmWMIcjTl3hSssW78H/mBZCT1Q7/3vetpdxBLb4hVmVIIVNUsQ8YLVDSVjP4s7LPlh5IRVeAnLKcdHJtYn1/gydNMSeu1PYwU3JqFrfRssqSX0WsrRirU/jpbUyrEKEWsT4FFREzFVOZKQxrdCgEdFrRxjiUhCGt8aAR5eQmMWVo5bJaCJglpCJ5W9bbgHAjwKbFdoVgm9JwI8SvolNKg0foT/EkswBUmwVeI+pPMjEDAJ9zgFZsWTgLUNWBtPAtY2YG08CVjbgLXxH2loFxEWi9ZNAAAAAElFTkSuQmCC"
    },
    "tiltbackwards": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAACyUlEQVR4nO2Z7W3bMBCGXxX9H21gbVBngmgEb1BlgqIb2BtkgzobpBNUmaDyBHE2kCe4/iAJEQo/JRKX2nwAQbJM8o6vT8czVRERbpkv3A5wUwTgdoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW6+BrZr5PFZGACMKQYKEaAD8CuFsYRcALQQQqyi8uwINQDe1hrJxDsSRKUvB6w2kJFNikFuPglerQAVQBXg3fG9WgFCCV0G/zsIqELa3XwEXK0AJQcEskSAVwCn1I54OMXaJKAKyQOxAjxClKBbAL8j+y7lWdrbyuukxApw1K5X1+ELbB4tbT4QmgNil8FOOlED2HnanhD2j62Bu6ztAPTadVqIyHW09JGeiM6G+4oXImo845rsDI4xB8v3MTaMh+/fYAvgT4SePwE8yesa4rn10WvtewDfIuwFFTtOFkSAjV7r9xTRbySiTvar5edQrL6rC1cbIkpaB6hffgfgR0S/O4gNlwYiZ7wk9MlLSgHO8txp93zL1qt2rZJqn8KZXHWAi3F2fgewl2cT6vs59RLjFdCopc9xNPN+KQVo5fkozxuI7TTbErfBlGAvmELflziNVSGJCDw4+h1oilKtY54kuI/oNxLRjsKS4CDb9PKzKfkNhokMpraUYRk8YArr1MvgSfozynYPMDzjlbD5d3b7nmyVq00Zio8ARa5CqNbaWyNARsFeu7F32U4dATpLSuELxLI4H6edjdXDEgGKSj7v5NnZzrklFlPRAdPLDj18TZMPpQtp9Fn2BE1vetZMHhRYT3DuCKnlbMnkG3kOSbJOfAIkeQFpQE3wjLjJbyHqhQ2EcNnfDQKisPm+1lAGHhGxQWIjRABAJJQdFpapiTlDTLxPMVioAFdL2RbndoCbIgC3A9wUAbgd4KYIwO0AN0UAbge4KQJwO8BNEYDbAW5uXoB/c4v7pl/dd2gAAAAASUVORK5CYII="
    },
    "tiltforward": {
        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsSAAALEgHS3X78AAAC2klEQVR4nO2Y3ZHaMBRGjzN5hw5CB0sqiNMBqSCUQDogHZAKQjqgg7AVLFtB2ApiKrh5kDxoja0fY+9liM6MByMk67ufpCuZQkT4n3mnLUCbbIC2AG2yAdoCtMkGaAvQJhugLUCbbIC2AG2yAdoCtMkGaAvQJmTAFNgDckPXEZhfFbVDEfhDZA98svePnnpz4NBRNgcmPfV1cQJmQHX1k0TEd9XMPXWWto5bthWRvfPbGJQB7VFXjAF7z+9ugG7wIiLVsPFeMIgB1yTBJfCzUbYFvtr7oaf9KPQ1YIk/eHUKKAsoQ/Xe93j2ksvg4Rz8I7DjMim2McOIHMO4rdNHN4E1IvI6B/iSWiUii55rcS7pOaMzByCydgrWvr5D26BgRrSke+RrvmBGHlt3gTlH+NhhRqrCbJd74nPHZ1v/FYV5zlOj+KN0zcjIGRDaztxZsg3UbXIQkaltu0lo1zoDEDm0BHJoqyuR22DM1FzZ+gunbB9o4xpVty8j+qq5MKAx9ZtX61KIMSBFzLpRduyofxSRmfN7PYOmPfqsA5lHJJuLA12fXaCNev266+y3p/4H4I/zvW7X+4xv13iR2m6ot8GF/dwBz4ltT8DG3pcD6aEAKUwS99eT8C4QS52Vp8CKuGCOwNp+zjCjeNUuUFMHL6FZEVg2KVTNdZlwzcRk6hT69tU7B5ww+zuYvbs5UhPMuv+FWQqxr6oL+9yukf+GmRkb4CFWbDQBh1zcU95C3oaN02dzh/DOACcAb4wpSbDquB+T0ftMMWCDSXBTzll7bFact8ZtSkOBIpgASXsbfAD+pogYgAmX5/pBudt/hWPPAXdrQCxDHYVvjpj1D3kG3K8BOQdEknPA2EJunZABP95ERTrPeF6FUwgZsAK+Ay9DdDYAL5i3zXKoB4b+ELl7cg7QFqBNNkBbgDbZAG0B2mQDtAVokw3QFqBNNkBbgDbZAG0B2mQDtAVo8w/leGQvtJ6OAwAAAABJRU5ErkJggg=="
    }
}

//% weight=100 color=#fa8f13 icon="\uf1b9" block="AutoBot"
// groups=['Directions', 'Movements', 'Sensors', 'Logic']
namespace autoBot {

    const MIN_VEL = 150;  //   0 km/hr
    const MAX_VEL = 1023;  // 100 km/hr

    /**
     * Setup variables, pins and enumerations
     */

    // Disable LED Matrix
    led.enable(true)

    // Stop motors
    stop()

    // Set initial speed
    setSpeed(50)

    export enum Gesture2 {

        //% block="izquierda"
        //% jres=gestures.tiltleft
        Uno = 1,  

        //% block="adelante"
        //% jres=gestures.tiltforward
        Dos = 2,  
   
        //% block="derecha"
        //% jres=gestures.tiltright
        Tres = 3,  
    }

    // Motor Directions
    export enum EnumDir {
        //% block="forward"
        //% block.loc.es-ES="adelante"
        Forward = 1,
        //% block="backward"
        //% block.loc.es-ES="atrás"
        Backward = 2,
        //% block="left"
        //% block.loc.es-ES="izquierda"
        Left = 3,
        //% block="right"
        //% block.loc.es-ES="derecha"
        Right = 4,
        //% block="stop"
        //% block.loc.es-ES="alto"
        Stop = 0
    }

    // Set speed to both motors
    function setSpeed(speed: number): void {
        let s = speed * (MAX_VEL - MIN_VEL) / 100 + MIN_VEL; // Adjust to the min and max PWM values
        // PWM para izquierdo
        pins.analogWritePin(AnalogPin.P8, s)
        // PWM para derecho
        pins.analogWritePin(AnalogPin.P16, s)
    }

    /**
     * Do something when when a gesture is done (like shaking the micro:bit).
     * @param gesture the type of gesture to track, eg: Gesture.Shake
     * @param body code to run when gesture is raised
     */
    //% blockId=getDirection
    //% block="$gesture"
    //////% gesture.fieldEditor="gestures" gesture.fieldOptions.columns=3 shim=input::onGesture
    //% gesture.fieldEditor="gestures" gesture.fieldOptions.columns=3
    export function onGesture2(gesture: Gesture2): number {
        return gesture
    };

    /**
     * Detects the tilt of the micro:bit card via the accelerometer
     * @returns 
     */
    //% blockId=senseAcelerometer
    //% block="sense acelerometer"
    //% block.loc.es-ES="detectar acelerómetro"
    //% group="Sensors"
    export function senseAcelerometer(): number {
        return 0
    }

    /**
     * Detects distance through ultrasonic sensor
     * @returns 
     */
    //% blockId=senseDistance
    //% block="sense distance"
    //% block.loc.es-ES="detectar distancia"
    //% group="Sensors"
    export function senseDistance(): number {
        return 0
    }

    /**
     * Detects the line through the five infrared sensors in front of the AutoBot, and returns forward, backward, left, right or stop.
     */
    //% blockId=senseLine
    //% block="sense line"
    //% block.loc.es-ES="detectar línea"
    //% group="Sensors"
    export function senseLine(): EnumDir {
        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 0 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
            return EnumDir.Forward
        } else
            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 0 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                return EnumDir.Left
            } else
                if (pins.digitalReadPin(DigitalPin.P0) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                    return EnumDir.Left
                } else
                    if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 0 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                        return EnumDir.Right
                    } else
                        if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 0)))) {
                            return EnumDir.Right
                        } else
                            if (pins.digitalReadPin(DigitalPin.P0) == 1 && (pins.digitalReadPin(DigitalPin.P1) == 1 && (pins.digitalReadPin(DigitalPin.P2) == 1 && (pins.digitalReadPin(DigitalPin.P3) == 1 && pins.digitalReadPin(DigitalPin.P4) == 1)))) {
                                return EnumDir.Stop
                            }
        return EnumDir.Stop // If no condition then Stop motors
    }

    /**
     * Stop the autobot
     */
    //% blockId=stop
    //% block="stop"
    //% block.loc.es-ES="alto"
    //% group="Movements"
    export function stop(): void {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Turn the autobot right at speed between 0 and 100 km/hr
     * @param speed
     */
    //% blockId=right
    //% block="turn right $speed km/hr"
    //% block.loc.es-ES="derecha $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function right(speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }


    /**
     * Turn the autobot left at speed between 0 and 100 km/hr
     * @param speed
     */
    //%blockId=left
    //%block="turn left $speed km/hr"
    //% block.loc.es-ES="izquierda $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function left(speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Moves the autobot backward at speed between 0 and 100 km/hr
     * @param speed
     */
    //%blockId=backward
    //%block="go backward $speed km/hr"
    //%block.loc.es-ES="atrás $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function backward
        (speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
    }


    /**
     * Moves the autobot forward at speed between 0 and 100 km/hr
     * @param speed
     */
    //%blockId=forward
    //%block="go forward $speed km/hr"
    //%block.loc.es-ES="adelante $speed km/hr"
    //% group="Movements"
    //% speed.min=0 speed.max=100
    //% speed.defl=50
    export function forward(speed: number): void {
        setSpeed(speed)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
    }

    /**
     * Direction constants
     */

    /**
     * Returns the value of stop to compare with the value returned by the line sensor.
     */
    //% blockId=stopDir
    //% block="stop"
    //% block.loc.es-ES="alto"
    //% group="Directions"
    export function stopDir(): number {
        return EnumDir.Stop
    }

    /**
     * Returns the value of right to compare with the value returned by the line sensor.
     */
    //% blockId=rightDir
    //% block="right"
    //% block.loc.es-ES="derecha"
    //% group="Directions"
    export function rightDir(): number {
        return EnumDir.Right
    }


    /**
     * Returns the value of left to compare with the value returned by the line sensor.
     */
    //% blockId=leftDir
    //% block="left"
    //% block.loc.es-ES="izquierda"
    //% group="Directions"
    export function leftDir(): number {
        return EnumDir.Left
    }

    /**
     * Returns the value of backward to compare with the value returned by the line sensor.
     */
    //% blockId=backwardDir
    //% block="backforward"
    //% block.loc.es-ES="atrás"
    //% group="Directions"
    export function backwardDir(): number {
        return EnumDir.Backward
    }

    /**
     * Returns the value of forward to compare with the value returned by the line sensor.
     */
    //% blockId=forwardDir
    //% block="forward"
    //% block.loc.es-ES="adelante"
    //% group="Directions"
    export function forwardDir(): number {
        return EnumDir.Forward
    }

    /**
     * Compares two values and returns true if equal or false if not equal
     */
    //% blockId=compareDir
    //% block="$directionA equal to $directionB"
    //% block.loc.es-ES="$directionA igual a $directionB"
    //% group="Logic"
    export function equal(directionA: number, directionB: number): boolean {
        return directionA == directionB
    }
}