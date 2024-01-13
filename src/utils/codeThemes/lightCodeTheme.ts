export const lightCodeTheme = {
  name: 'material-lighter',
  semanticHighlighting: true,
  tokenColors: [
    {
      name: 'Global settings',
      settings: {
        background: '#e5e7eb',
        foreground: '#7F929B',
      },
    },
    {
      name: 'String',
      scope: 'string',
      settings: {
        foreground: '#91B859',
      },
    },
    {
      name: 'Punctuation',
      scope: 'punctuation, constant.other.symbol',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'String Escape',
      scope:
        'constant.character.escape, text.html constant.character.entity.named',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'Boolean',
      scope: 'constant.language.boolean',
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'Number',
      scope: 'constant.numeric',
      settings: {
        foreground: '#F76D47',
      },
    },
    {
      name: 'Variable',
      scope:
        'variable, variable.parameter, support.variable, variable.language, support.constant, meta.definition.variable entity.name.function, meta.function-call.arguments',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'Other Keyword',
      scope: 'keyword.other',
      settings: {
        foreground: '#F76D47',
      },
    },
    {
      name: 'Keyword',
      scope:
        'keyword, modifier, variable.language.this, support.type.object, constant.language',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'Function call',
      scope: 'entity.name.function, support.function',
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'Storage',
      scope: 'storage.type, storage.modifier, storage.control',
      settings: {
        foreground: '#9C3EDA',
      },
    },
    {
      name: 'Modules',
      scope: 'support.module, support.node',
      settings: {
        foreground: '#E53935',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Type',
      scope: 'support.type, constant.other.key',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'Type',
      scope: 'entity.name.type, entity.other.inherited-class, entity.other',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'Comment',
      scope: 'comment',
      settings: {
        foreground: '#7F929B',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Comment',
      scope: 'comment punctuation.definition.comment, string.quoted.docstring',
      settings: {
        foreground: '#7F929B',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Punctuation',
      scope: 'punctuation',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'Class',
      scope:
        'entity.name, entity.name.type.class, support.type, support.class, meta.use',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'Class variable',
      scope:
        'variable.object.property, meta.field.declaration entity.name.function',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'Class method',
      scope: 'meta.definition.method entity.name.function',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'Function definition',
      scope: 'meta.function entity.name.function',
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'Template expression',
      scope:
        'template.expression.begin, template.expression.end, punctuation.definition.template-expression.begin, punctuation.definition.template-expression.end',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'Reset embedded/template expression colors',
      scope: 'meta.embedded, source.groovy.embedded, meta.template.expression',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'YAML key',
      scope: 'entity.name.tag.yaml',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'JSON key',
      scope:
        'meta.object-literal.key, meta.object-literal.key string, support.type.property-name.json',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'JSON constant',
      scope: 'constant.language.json',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'CSS class',
      scope: 'entity.other.attribute-name.class',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'CSS ID',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: '#F76D47',
      },
    },
    {
      name: 'CSS tag',
      scope: 'source.css entity.name.tag',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'CSS properties',
      scope: 'support.type.property-name.css',
      settings: {
        foreground: '#8796B0',
      },
    },
    {
      name: 'HTML tag outer',
      scope: 'meta.tag, punctuation.definition.tag',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'HTML tag inner',
      scope: 'entity.name.tag',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'HTML tag attribute',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: '#9C3EDA',
      },
    },
    {
      name: 'HTML entities',
      scope: 'punctuation.definition.entity.html',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'Markdown heading',
      scope: 'markup.heading',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'Markdown link text',
      scope: 'text.html.markdown meta.link.inline, meta.link.reference',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'Markdown list item',
      scope: 'text.html.markdown beginning.punctuation.definition.list',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'Markdown italic',
      scope: 'markup.italic',
      settings: {
        foreground: '#E53935',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown bold',
      scope: 'markup.bold',
      settings: {
        foreground: '#E53935',
        fontStyle: 'bold',
      },
    },
    {
      name: 'Markdown bold italic',
      scope: 'markup.bold markup.italic, markup.italic markup.bold',
      settings: {
        foreground: '#E53935',
        fontStyle: 'italic bold',
      },
    },
    {
      name: 'Markdown code block',
      scope:
        'markup.fenced_code.block.markdown punctuation.definition.markdown',
      settings: {
        foreground: '#91B859',
      },
    },
    {
      name: 'Markdown inline code',
      scope: 'markup.inline.raw.string.markdown',
      settings: {
        foreground: '#91B859',
      },
    },
    {
      name: 'INI property name',
      scope: 'keyword.other.definition.ini',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'INI section title',
      scope: 'entity.name.section.group-title.ini',
      settings: {
        foreground: '#39ADB5',
      },
    },
    {
      name: 'C# class',
      scope: 'source.cs meta.class.identifier storage.type',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'C# class method',
      scope: 'source.cs meta.method.identifier entity.name.function',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'C# function call',
      scope:
        'source.cs meta.method-call meta.method, source.cs entity.name.function',
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'C# type',
      scope: 'source.cs storage.type',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'C# return type',
      scope: 'source.cs meta.method.return-type',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'C# preprocessor',
      scope: 'source.cs meta.preprocessor',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'C# namespace',
      scope: 'source.cs entity.name.type.namespace',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'JSX Text',
      scope: 'meta.jsx.children, SXNested',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'JSX Components name',
      scope: 'support.class.component',
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'C-related Block Level Variables',
      scope: 'source.cpp meta.block variable.other',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'Member Access Meta',
      scope: 'source.python meta.member.access.python',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'Function Call',
      scope:
        'source.python meta.function-call.python, meta.function-call.arguments',
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'Blocks',
      scope: 'meta.block',
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'Function Call',
      scope: 'entity.name.function.call',
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'Namespaces',
      scope:
        'source.php support.other.namespace, source.php meta.use support.class',
      settings: {
        foreground: '#7F929B',
      },
    },
    {
      name: 'Constant keywords',
      scope: 'constant.keyword',
      settings: {
        foreground: '#39ADB5',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Entity name',
      scope: 'entity.name.function',
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'Global settings',
      settings: {
        background: '#FAFAFA',
        foreground: '#7F929B',
      },
    },
    {
      name: 'Markup Deleted',
      scope: ['markup.deleted'],
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'Markup Inserted',
      scope: ['markup.inserted'],
      settings: {
        foreground: '#91B859',
      },
    },
    {
      name: 'Markup Underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      name: 'Keyword Control',
      scope: ['keyword.control'],
      settings: {
        foreground: '#39ADB5',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Parameter',
      scope: ['variable.parameter'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Self Parameter',
      scope: ['variable.parameter.function.language.special.self.python'],
      settings: {
        foreground: '#E53935',
        fontStyle: 'italic',
      },
    },
    {
      name: 'Python - Format Placeholder',
      scope: ['constant.character.format.placeholder.other.python'],
      settings: {
        foreground: '#F76D47',
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
        foreground: '#39ADB5',
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['markup.fenced_code.block'],
      settings: {
        foreground: '#7F929B90',
      },
    },
    {
      name: 'Markdown - Blockquote Punctuation',
      scope: ['punctuation.definition.quote'],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'JSON Key - Level 0',
      scope: ['meta.structure.dictionary.json support.type.property-name.json'],
      settings: {
        foreground: '#9C3EDA',
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#E2931D',
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#F76D47',
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#E53935',
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#916b53',
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#6182B8',
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#FF5370',
      },
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#9C3EDA',
      },
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#91B859',
      },
    },
  ],
  colors: {
    focusBorder: '#FFFFFF00',
    foreground: '#7F929B',
    'button.background': '#80CBC440',
    'button.foreground': '#ffffff',
    'dropdown.background': '#FAFAFA',
    'input.background': '#EEEEEE',
    'inputOption.activeBorder': '#7F929B30',
    'list.activeSelectionBackground': '#FAFAFA',
    'list.activeSelectionForeground': '#80CBC4',
    'list.dropBackground': '#E5393580',
    'list.focusBackground': '#7F929B20',
    'list.focusForeground': '#7F929B',
    'list.highlightForeground': '#80CBC4',
    'list.hoverBackground': '#FAFAFA',
    'list.inactiveSelectionBackground': '#CCD7DA50',
    'activityBar.background': '#FAFAFA',
    'activityBar.dropBackground': '#E5393580',
    'activityBarBadge.background': '#80CBC4',
    'activityBarBadge.foreground': '#000000',
    'badge.background': '#CCD7DA30',
    'badge.foreground': '#7F929B',
    'sideBar.background': '#FAFAFA',
    'sideBarSectionHeader.background': '#FAFAFA',
    'editorGroup.dropBackground': '#E5393580',
    'editorGroup.focusedEmptyBorder': '#E53935',
    'editorGroupHeader.tabsBackground': '#FAFAFA',
    'tab.border': '#FAFAFA',
    'tab.activeBorder': '#80CBC4',
    'tab.inactiveBackground': '#FAFAFA',
    'tab.activeModifiedBorder': '#7E939E',
    'tab.inactiveModifiedBorder': '#89221f',
    'tab.unfocusedActiveModifiedBorder': '#b72d2a',
    'tab.unfocusedInactiveModifiedBorder': '#89221f',
    'editor.background': '#e5e7ebff',
    'editor.foreground': '#7F929B',
    'editorLineNumber.foreground': '#CFD8DC',
    'editorLineNumber.activeForeground': '#7E939E',
    'editorCursor.foreground': '#272727',
    'editor.selectionBackground': '#80CBC440',
    'editor.selectionHighlightBackground': '#27272720',
    'editor.wordHighlightBackground': '#FF537030',
    'editor.wordHighlightStrongBackground': '#91B85930',
    'editor.findMatchHighlight': '#7F929B',
    'editor.findRangeHighlightBackground': '#E2931D30',
    'editor.lineHighlightBorder': '#CCD7DA00',
    'editor.rangeHighlightBackground': '#FFFFFF0d',
    'editorWhitespace.foreground': '#7F929B40',
    'editorWidget.background': '#FAFAFA',
    'editorHoverWidget.background': '#FAFAFA',
    'editorMarkerNavigation.background': '#7F929B05',
    'peekView.border': '#00000020',
    'peekViewEditor.background': '#7F929B05',
    'peekViewResult.background': '#7F929B05',
    'peekViewTitle.background': '#7F929B05',
    'panel.background': '#FAFAFA',
    'panel.border': '#FAFAFA60',
    'panelTitle.activeBorder': '#80CBC4',
    'panelTitle.inactiveForeground': '#7F929B',
    'notebook.focusedCellBorder': '#80CBC4',
    'notebook.inactiveFocusedCellBorder': '#80CBC450',
    'statusBar.background': '#FAFAFA',
    'statusBar.debuggingBackground': '#9C3EDA',
    'statusBar.debuggingForeground': '#FFFFFF',
    'statusBar.noFolderBackground': '#FAFAFA',
    'statusBarItem.activeBackground': '#E5393580',
    'statusBarItem.hoverBackground': '#7F929B20',
    'statusBarItem.remoteBackground': '#80CBC4',
    'statusBarItem.remoteForeground': '#000000',
    'titleBar.activeBackground': '#FAFAFA',
    'pickerGroup.border': '#FFFFFF1a',
    'terminal.ansiBlack': '#000000',
    'terminal.ansiBlue': '#6182B8',
    'terminal.ansiBrightBlack': '#7F929B',
    'terminal.ansiBrightBlue': '#6182B8',
    'terminal.ansiBrightCyan': '#39ADB5',
    'terminal.ansiBrightGreen': '#91B859',
    'terminal.ansiBrightMagenta': '#9C3EDA',
    'terminal.ansiBrightRed': '#E53935',
    'terminal.ansiBrightWhite': '#FFFFFF',
    'terminal.ansiBrightYellow': '#E2931D',
    'terminal.ansiCyan': '#39ADB5',
    'terminal.ansiGreen': '#91B859',
    'terminal.ansiMagenta': '#9C3EDA',
    'terminal.ansiRed': '#E53935',
    'terminal.ansiWhite': '#FFFFFF',
    'terminal.ansiYellow': '#E2931D',
    'debugToolBar.background': '#FAFAFA',
    'debugConsole.errorForeground': '#E53935',
    'debugConsole.infoForeground': '#39ADB5',
    'debugConsole.warningForeground': '#E2931D',
    'selection.background': '#CCD7DA80',
    'editorRuler.foreground': '#B0BEC5',
    'widget.shadow': '#00000020',
    'scrollbar.shadow': '#00000020',
    'editorLink.activeForeground': '#7F929B',
    'progressBar.background': '#80CBC4',
    'pickerGroup.foreground': '#80CBC4',
    'tree.indentGuidesStroke': '#B0BEC5',
    'terminalCursor.foreground': '#E2931D',
    'terminalCursor.background': '#000000',
    'inputOption.activeBackground': '#7F929B30',
    'textLink.foreground': '#80CBC4',
    'textLink.activeForeground': '#7F929B',
    'sideBar.foreground': '#7E939E',
    'sideBar.border': '#FAFAFA60',
    'sideBarTitle.foreground': '#7F929B',
    'sideBarSectionHeader.border': '#FAFAFA60',
    'panel.dropBackground': '#7F929B',
    'panelTitle.activeForeground': '#000000',
    'editor.lineHighlightBackground': '#CCD7DA50',
    'editor.findMatchBackground': '#00000020',
    'editor.findMatchHighlightBackground': '#00000010',
    'editor.findMatchBorder': '#80CBC4',
    'editor.findMatchHighlightBorder': '#00000030',
    'editorIndentGuide.background': '#B0BEC570',
    'editorIndentGuide.activeBackground': '#B0BEC5',
    'editorGroup.border': '#00000020',
    'editorGutter.modifiedBackground': '#6182B860',
    'editorGutter.addedBackground': '#91B85960',
    'editorGutter.deletedBackground': '#E5393560',
    'activityBar.border': '#FAFAFA60',
    'activityBar.foreground': '#7F929B',
    'activityBar.activeBorder': '#80CBC4',
    'extensionBadge.remoteForeground': '#7F929B',
    'scrollbarSlider.background': '#7F929B20',
    'scrollbarSlider.hoverBackground': '#7F929B10',
    'scrollbarSlider.activeBackground': '#80CBC4',
    'tab.unfocusedActiveBorder': '#7F929B',
    'tab.activeForeground': '#000000',
    'tab.inactiveForeground': '#7E939E',
    'tab.activeBackground': '#FAFAFA',
    'tab.unfocusedActiveForeground': '#7F929B',
    'editorWidget.resizeBorder': '#80CBC4',
    'editorWidget.border': '#80CBC4',
    'statusBar.border': '#FAFAFA60',
    'statusBar.foreground': '#7E939E',
    'editorBracketMatch.border': '#27272750',
    'editorBracketMatch.background': '#FAFAFA',
    'editorOverviewRuler.findMatchForeground': '#80CBC4',
    'editorOverviewRuler.border': '#FAFAFA',
    'editorOverviewRuler.errorForeground': '#E5393540',
    'editorOverviewRuler.infoForeground': '#6182B840',
    'editorOverviewRuler.warningForeground': '#E2931D40',
    'editorInfo.foreground': '#6182B870',
    'editorWarning.foreground': '#E2931D70',
    'editorError.foreground': '#E5393570',
    'editorHoverWidget.border': '#00000010',
    'titleBar.activeForeground': '#7F929B',
    'titleBar.inactiveBackground': '#FAFAFA',
    'titleBar.inactiveForeground': '#7E939E',
    'titleBar.border': '#FAFAFA60',
    'input.foreground': '#7F929B',
    'input.placeholderForeground': '#7F929B60',
    'input.border': '#00000010',
    'inputValidation.errorBorder': '#E53935',
    'inputValidation.infoBorder': '#6182B8',
    'inputValidation.warningBorder': '#E2931D',
    'dropdown.border': '#00000010',
    'quickInput.background': '#FAFAFA',
    'quickInput.foreground': '#7E939E',
    'list.hoverForeground': '#B1C7D3',
    'list.inactiveSelectionForeground': '#80CBC4',
    'quickInput.list.focusBackground': '#7F929B20',
    'editorSuggestWidget.background': '#FAFAFA',
    'editorSuggestWidget.foreground': '#7F929B',
    'editorSuggestWidget.highlightForeground': '#80CBC4',
    'editorSuggestWidget.selectedBackground': '#CCD7DA50',
    'editorSuggestWidget.border': '#00000010',
    'diffEditor.insertedTextBackground': '#39ADB520',
    'diffEditor.removedTextBackground': '#FF537020',
    'notifications.background': '#FAFAFA',
    'notifications.foreground': '#7F929B',
    'notificationLink.foreground': '#80CBC4',
    'extensionButton.prominentBackground': '#91B85990',
    'extensionButton.prominentHoverBackground': '#91B859',
    'extensionButton.prominentForeground': '#000000',
    'peekViewEditorGutter.background': '#7F929B05',
    'peekViewTitleDescription.foreground': '#7F929B60',
    'peekViewResult.matchHighlightBackground': '#80CBC440',
    'peekViewEditor.matchHighlightBackground': '#80CBC440',
    'peekViewResult.selectionBackground': '#7E939E70',
    'gitDecoration.deletedResourceForeground': '#E5393590',
    'gitDecoration.conflictingResourceForeground': '#E2931D90',
    'gitDecoration.modifiedResourceForeground': '#6182B890',
    'gitDecoration.untrackedResourceForeground': '#91B85990',
    'gitDecoration.ignoredResourceForeground': '#7E939E90',
    'breadcrumb.background': '#FAFAFA',
    'breadcrumb.foreground': '#7E939E',
    'breadcrumb.focusForeground': '#7F929B',
    'breadcrumb.activeSelectionForeground': '#80CBC4',
    'breadcrumbPicker.background': '#FAFAFA',
    'menu.background': '#FAFAFA',
    'menu.foreground': '#7F929B',
    'menu.selectionBackground': '#CCD7DA50',
    'menu.selectionForeground': '#80CBC4',
    'menu.selectionBorder': '#CCD7DA50',
    'menu.separatorBackground': '#7F929B',
    'menubar.selectionBackground': '#CCD7DA50',
    'menubar.selectionForeground': '#80CBC4',
    'menubar.selectionBorder': '#CCD7DA50',
    'settings.dropdownForeground': '#7F929B',
    'settings.dropdownBackground': '#FAFAFA',
    'settings.numberInputForeground': '#7F929B',
    'settings.numberInputBackground': '#FAFAFA',
    'settings.textInputForeground': '#7F929B',
    'settings.textInputBackground': '#FAFAFA',
    'settings.headerForeground': '#80CBC4',
    'settings.modifiedItemIndicator': '#80CBC4',
    'settings.checkboxBackground': '#FAFAFA',
    'settings.checkboxForeground': '#7F929B',
    'listFilterWidget.background': '#CCD7DA50',
    'listFilterWidget.outline': '#CCD7DA50',
    'listFilterWidget.noMatchesOutline': '#CCD7DA50',
  },
};
