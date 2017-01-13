---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PERSONAL PREFERENCES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PERSONAL PREFERENCES{:/}
 tag | {::nomarkdown}GETPREF{:/}
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns Users personal preferences for TIU in the following format: TIUY = USER [1P] ^ DEFAULT LOCATION [2P] ^ REVIEW SCREEN SORT FIELD [3S] ^    ==>REVIEW SCREEN SORT ORDER [4S] ^ DISPLAY MENUS [5S] ^ PATIENT    ==>SELECTION PREFERENCE [6S] ^ ASK 'Save changes?' AFTER EDIT [7S] ^    ==>ASK SUBJECT FOR PROGRESS NOTES [8S] ^{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get user's personal preferences

 Leading comment lines | {::nomarkdown}Call with TIUY (by ref)
USER is pointer to file 200
Returns   TIUY = USER ^ DEFAULT LOCATION ^ REVIEW SCREEN SORT FIELD ^
==>REVIEW SCREEN SORT ORDER ^ DISPLAY MENUS ^ PATIENT
==>SELECTION PREFERENCE ^ ASK 'Save changes?' AFTER
==>EDIT ^ ASK SUBJECT FOR PROGRESS NOTES ^{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer to file 200 (DUZ) for the current user.{:/} | 




 Generated on January 13th 2017, 6:15:57 am