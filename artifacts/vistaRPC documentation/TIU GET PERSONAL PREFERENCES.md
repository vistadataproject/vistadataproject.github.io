---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET PERSONAL PREFERENCES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PERSONAL PREFERENCES{:/}
 tag | {::nomarkdown}GETPREF{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns Users personal preferences for TIU in the following format: TIUY = USER [1P] ^ DEFAULT LOCATION [2P] ^ REVIEW SCREEN SORT FIELD [3S] ^    ==>REVIEW SCREEN SORT ORDER [4S] ^ DISPLAY MENUS [5S] ^ PATIENT    ==>SELECTION PREFERENCE [6S] ^ ASK 'Save changes?' AFTER EDIT [7S] ^    ==>ASK SUBJECT FOR PROGRESS NOTES [8S] ^{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to file 200 (DUZ) for the current user.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETPREF^[TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 Method comment | Get user's personal preferences
 Input parameters | {::nomarkdown}USER{:/}
 First comment | {::nomarkdown}<pre> Call with TIUY (by ref)<br/>           USER is pointer to file 200<br/> Returns   TIUY = USER ^ DEFAULT LOCATION ^ REVIEW SCREEN SORT FIELD ^<br/>               ==>REVIEW SCREEN SORT ORDER ^ DISPLAY MENUS ^ PATIENT<br/>               ==>SELECTION PREFERENCE ^ ASK 'Save changes?' AFTER<br/>               ==>EDIT ^ ASK SUBJECT FOR PROGRESS NOTES ^</pre>{:/}
 Code | {::nomarkdown}  S TIUY=$$PERSPRF^TIULE(USER){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rDCSumm.pas">rDCSumm.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}