---
layout: default
title: Parameters
---

#### [Developer Documentation](../index) &#187; [Parameters](TableOfContents) &#187; ORWT TOOLS MENU<br/>
# ORWT TOOLS MENU

This parameter may be used to identify which items should appear on thetools menu which is displayed by the CPRS GUI.  Each item should containa name that should be displayed on the menu, followed by an equal sign,followed by the command string used to invoke the executable.  Thisstring may also include parameters that are passed to the executable.Some example entries are:      Hospital Policy&#x3D;C:\WINNT\SYSTEM32\VIEWERS\QUIKVIEW.EXE LOCPLCY.DOC     VISTA Terminal&#x3D;C:\PROGRA~1\KEA\KEAVT.EXE VISTA.KTC An ampersand may be used in the name portion to identify a letter thatshould be underlined on the menu for quick keyboard access.  For example,to underscore the letter H in Hospital Policy, enter &amp;Hospital Policy asthe name part. To use submenus on the tools menu, you must place special text in thecaption and action values.  Submenus must have action text SUBMENU ID,where ID is a unique identifier for the submenu.  Menu items belonging tothe submenu must specify which submenu they belong to by appending [ID]after the caption.  Thus the following entries create a Utilities submenuwith 2 child items:      Utilities&#x3D;SUBMENU 1     Calculator[1]&#x3D;calc.exe     Notepad[1]&#x3D;notepad.exe To create a nested submenu, you create a submenu that belongs to anothersubmenu s ID.  For example, to create a nested submenu belonging theabove Utilities submenu, you would do the following:      Utility Web Sites[1]&#x3D;SUBMENU UtilWeb     MicroSoft Tools[UtilWeb]&#x3D;http:\\www.msdn While submenu IDs at the end of a caption are not displayed on the Toolsmenu, this is only true if a corresponding menu ID is found.  If no MenuID is found, the square brackets and included text will appear as part ofthe caption on the Tools menu.  This allows for existing bracketed textto remain displayed. If two submenus share the same menu ID, the second submenu will betreated as belonging to the first menu. One point worth noting.  If you have a caption of a single dash (or asingle dash followed by a submenu id), it will create a separator line inthe menu or submenu.  This is not new functionality, but may not havebeen previously documented. Finally, if more than 30 menu items are assigned to the top level menu(i.e. they are not part of a submenu), a &quot;More...&quot; submenu willautomatically be created at the top of the Tools menu, with additionalmenu items spilling into the newly created &quot;More...&quot; submenu.  If morethan 30 menu items spill into the &quot;More...&quot; submenu, another &quot;More...&quot;submenu will be created inside the first &quot;More...&quot; submenu, withadditional menu items spilling into it, and so on, as needed.  Note,however, that there is a limit of 99 total menu items, since you can onlyenter an integer sequence number from 1-99 when defining the ORWT TOOLSMENU parameter.

## Properties

Property | Value
--- | ---
Summary | CPRS GUI Tools Menu
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