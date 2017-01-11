---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB USERSAVE 

 property | value 
--- | --- 
 label | PSB USERSAVE
 tag | USRSAVE
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | ARRAY
 description | Save the users current window settings for the next session.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBWIN | LITERAL | 30 | true | Contains the current window settings so that the next time the user activates the application the window will reappear in the same format. Data is in the following format:    Window Top;Window Left;Window Height;Window Width;Window State | 
| PSBVDL | LITERAL |  | true | VDL settings | 
| PSBUDCW  | LITERAL |  | true | UD tab column settings | 
| PSBPBCW | LITERAL |  | true | PB tab column settings  | 
| PSBIVCW | LITERAL |  | true | IV tab column settings    | 
| PSBDEV | LITERAL |  | true | Last print device used. | 
| PSBCSRT | LITERAL |  |  |  | 
| PSBCV1 | LITERAL |  |  |  | 
| PSBCV2 | LITERAL |  |  |  | 
| PSBCV3 | LITERAL |  |  |  | 
| PSBCV4 | LITERAL |  |  |  | 
| PSBORMODE | LITERAL |  |  | Last Order mode per user upon exit of BCMA. This parameter is for the last Order Mode the user was using upon exiting BCMA.   Value  0    Inpatient order mode  1    Clinic order mdoe | 
| PSBCLSRCH | LITERAL |  |  | Last Clinic Search text criteria entered per user.  This parameter contains two pieces of data delimited by a \/\.  First piece of data is the Clinic name search Prefix text and the second is the Clinic name contains search text. Example: AL-BLUE TEAM/CARDIAC | 




 ###### Generated on January 11th 2017, 6:39:42 am