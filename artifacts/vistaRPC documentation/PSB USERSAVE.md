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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBWIN | LITERAL | 30 | true | Contains the current window settings so that the next time the user activates the application the window will reappear in the same format. Data is in the following format:    Window Top;Window Left;Window Height;Window Width;Window State | 
| vs:Input_Parameter-8994_02 | PSBVDL | LITERAL |  | true | VDL settings | 
| vs:Input_Parameter-8994_02 | PSBUDCW  | LITERAL |  | true | UD tab column settings | 
| vs:Input_Parameter-8994_02 | PSBPBCW | LITERAL |  | true | PB tab column settings  | 
| vs:Input_Parameter-8994_02 | PSBIVCW | LITERAL |  | true | IV tab column settings    | 
| vs:Input_Parameter-8994_02 | PSBDEV | LITERAL |  | true | Last print device used. | 
| vs:Input_Parameter-8994_02 | PSBCSRT | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | PSBCV1 | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | PSBCV2 | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | PSBCV3 | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | PSBCV4 | LITERAL |  |  |  | 
| vs:Input_Parameter-8994_02 | PSBORMODE | LITERAL |  |  | Last Order mode per user upon exit of BCMA. This parameter is for the last Order Mode the user was using upon exiting BCMA.   Value  0    Inpatient order mode  1    Clinic order mdoe | 
| vs:Input_Parameter-8994_02 | PSBCLSRCH | LITERAL |  |  | Last Clinic Search text criteria entered per user.  This parameter contains two pieces of data delimited by a \/\.  First piece of data is the Clinic name search Prefix text and the second is the Clinic name contains search text. Example: AL-BLUE TEAM/CARDIAC | 