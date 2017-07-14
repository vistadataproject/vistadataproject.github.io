---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; GMV PARAMETER<br/>
# GMV PARAMETER

Sets and retrieves parameter values used by the graphical user interface.

**Native RPC Documentation:** [GMV PARAMETER](../VISTARPC/GMV_PARAMETER)

**MUMPS Implementation:** [RPC^GMVPAR](http://code.osehra.org/dox/Routine_GMVPAR_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Parameters
Class | CHANGE
Complexity | MODERATE
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [8989.3](../VDM/Kernel_System_Parameters-8989_3), [8989.51](../VDM/Parameter_Definition-8989_51), [8989.518](../VDM/Parameter_Entity-8989_518)
Parameters Used | [GMV DLL VERSION](../Parameters/GMV_DLL_VERSION), [GMV GUI VERSION](../Parameters/GMV_GUI_VERSION), [GMV WEBLINK](../Parameters/GMV_WEBLINK), [GMV ALLOW USER TEMPLATES](../Parameters/GMV_ALLOW_USER_TEMPLATES), [GMV DEFAULT VALUES](../Parameters/GMV_DEFAULT_VALUES), [GMV TEMPLATE](../Parameters/GMV_TEMPLATE), [GMV TEMPLATE DEFAULT](../Parameters/GMV_TEMPLATE_DEFAULT), [GMV USER DEFAULTS](../Parameters/GMV_USER_DEFAULTS)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
OPTION | LITERAL | true | Routine tag line to call | GETPAR
ENT | LITERAL | false | The entity value to use. See FILE 8989.518 for a list of all entity values | SYS
PAR | LITERAL | false | The parameter value to use. See FILE 8989.51 for a list of parameter values. This value must start with the letters "GMV" (no quotes). | GMV ALLOW USER TEMPLATES
INST | LITERAL | false | The instance to use. | 1
VAL | LITERAL | false | The value assigned to a parameter, stored in FILE 8989.5 | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}