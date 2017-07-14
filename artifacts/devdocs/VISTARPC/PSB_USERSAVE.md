---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB USERSAVE<br/>
# PSB USERSAVE

Save the users current window settings for the next session.

## Properties

Property | Value
--- | ---
Label | USRSAVE
Routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBWIN | LITERAL | 30 | true | Contains the current window settings so that the next time the user activates the application the window will reappear in the same format. Data is in the following format:    Window Top;Window Left;Window Height;Window Width;Window State
PSBVDL | LITERAL |  | true | VDL settings
PSBUDCW  | LITERAL |  | true | UD tab column settings
PSBPBCW | LITERAL |  | true | PB tab column settings 
PSBIVCW | LITERAL |  | true | IV tab column settings   
PSBDEV | LITERAL |  | true | Last print device used.
PSBCSRT | LITERAL |  |  | 
PSBCV1 | LITERAL |  |  | 
PSBCV2 | LITERAL |  |  | 
PSBCV3 | LITERAL |  |  | 
PSBCV4 | LITERAL |  |  | 
PSBORMODE | LITERAL |  |  | Last Order mode per user upon exit of BCMA. This parameter is for the last Order Mode the user was using upon exiting BCMA.   Value  0    Inpatient order mode  1    Clinic order mdoe
PSBCLSRCH | LITERAL |  |  | Last Clinic Search text criteria entered per user.  This parameter contains two pieces of data delimited by a &quot;/&quot;.  First piece of data is the Clinic name search Prefix text and the second is the Clinic name contains search text. Example: AL-BLUE TEAM/CARDIAC



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}