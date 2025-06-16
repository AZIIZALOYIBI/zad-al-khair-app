# GreyCat's VSCode Extension

## Release
This extension is available in the Microsoft Marketplace here [datathings.greycat](https://marketplace.visualstudio.com/items?itemName=DataThings.greycat)

```sh
code --install-extension datathings.greycat
```

GitLab's CI also packages the extension on every push to the master branch (see [pipeline/build](https://hub.datathings.com/greycat/tools/vscode-extension))

## Report an issue
This project is about the VSCode Extension, it is in charge of starting/configuring GreyCat's LSP Server.

If something is not working as expected in the LSP Server you should report it in [greycat/lang](https://hub.datathings.com/greycat/lang/-/issues/new?issue).

**Error reporting for this repo is about:**
 - syntax highlighting (which does not involve [Semantic Highlight](https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide))
 - project loading error (no completion for a project in a workspace)
 - (in the future) Problems with running/debugging UIs of a project

## Troubleshoot

### Suggestion does not appear on MacOS
In some cases, the completion (suggestion) is not triggered when pressing Ctrl+space on MacOS.
Please verify that this shortcut is not already assigned to a MacOS system shortcut (that prevents VSCode to get the signal).     
Go to System Settings, search for the Keyboard section, click on "Keyboard Shortcuts", select the "Input Sources" item, and verify the "Select the previous input source" is **NOT** selected (since it is mapped to Ctrl+space shortcut). Restart VSCode, all should be fine.
