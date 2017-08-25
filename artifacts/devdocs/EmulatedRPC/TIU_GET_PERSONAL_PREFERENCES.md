---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU GET PERSONAL PREFERENCES<br/>
# TIU GET PERSONAL PREFERENCES

Returns User TIU: 1. UserIEN^ 2. LocIEN^ 3. Review Sort Field^ 4. Rev Sort Order^5. Display Menu? (T/F)^ 6. Patient Selection Pref^ 7. Ask Save Changes? (T/F)^8. Ask Subject for Progress Notes (T/F)^ 9. Cosigner^ # of Rev Notes^ 10. Suppress Rev Notes Prompt (T/F)

**Native RPC Documentation:** [TIU GET PERSONAL PREFERENCES](../VISTARPC/TIU_GET_PERSONAL_PREFERENCES)

**MUMPS Implementation:** [GETPREF^TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [8926](../VDM/TIU_Personal_Preferences-8926)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
USER | LITERAL | false | User IEN | 62

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}