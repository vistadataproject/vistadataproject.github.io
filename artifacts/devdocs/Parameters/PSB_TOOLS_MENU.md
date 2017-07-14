---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; PSB TOOLS MENU<br/>
# PSB TOOLS MENU

This parameter may be used to identify which items should appear on the tools menu which is displayed by the BCMA GUI.  Each item should contain a name that should be displayed on the menu, followed by an equal sign, followed by the command string used to invoke the executable.  This string may also include parameters that are passed to the executable.Some example entries are:  Hospital Policy&#x3D;C:\WINNT\SYSTEM32\VIEWERS\QUIKVIEW.EXE LOCPLCY.DOCVISTA Terminal&#x3D;C:\PROGRA~1\KEA\KEAVT.EXE VISTA.KTC  An ampersand may be used in the name portion to identify a letter thatshould be underlined on the menu for quick keyboard access.  For example,to underscore the letter H in Hospital Policy, enter &amp;Hospital Policy asthe name part.

## Properties

Property | Value
--- | ---
Summary | PSB GUI Tools Menu
Value Type | free text
Value Domain | 
Multiple Instances | true

## Allowable Entities

Precedence | Entity
--- | ---
1 | USER
2 | LOCATION
2.5 | SERVICE
3 | DIVISION
4 | SYSTEM
9 | PACKAGE

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:29 pm</p>{:/}