---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET PERSONAL PREFERENCES 

 property | value 
--- | --- 
 label | TIU GET PERSONAL PREFERENCES
 tag | GETPREF
 routine | [TIUSRVR](http://code.osehra.org/dox/Routine_TIUSRVR_source.html)
 return value type | SINGLE VALUE
 description | Returns Users personal preferences for TIU in the following format: TIUY = USER [1P] ^ DEFAULT LOCATION [2P] ^ REVIEW SCREEN SORT FIELD [3S] ^    ==>REVIEW SCREEN SORT ORDER [4S] ^ DISPLAY MENUS [5S] ^ PATIENT    ==>SELECTION PREFERENCE [6S] ^ ASK 'Save changes?' AFTER EDIT [7S] ^    ==>ASK SUBJECT FOR PROGRESS NOTES [8S] ^


### Method description

 property | value 
--- | --- 
 Method comment | Get user's personal preferences
 Leading comment lines | Call with TIUY (by ref),USER is pointer to file 200,Returns   TIUY = USER ^ DEFAULT LOCATION ^ REVIEW SCREEN SORT FIELD ^,==>REVIEW SCREEN SORT ORDER ^ DISPLAY MENUS ^ PATIENT,==>SELECTION PREFERENCE ^ ASK 'Save changes?' AFTER,==>EDIT ^ ASK SUBJECT FOR PROGRESS NOTES ^

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| USER | LITERAL |  | true | This is the pointer to file 200 (DUZ) for the current user. | 




 Generated on January 11th 2017, 7:15:03 am