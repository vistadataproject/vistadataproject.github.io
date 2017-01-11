---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC TIU GET RECORD TEXT 

 property | value 
--- | --- 
 label | DSIC TIU GET RECORD TEXT
 tag | TEXT
 routine | [DSICTIU1](http://code.osehra.org/dox/Routine_DSICTIU1_source.html)
 return value type | GLOBAL ARRAY
 description | This was mainly written to allow one M routine to get the text of any signed progress note.  This function is exposed to the GUI.  However, GUI applications should use the TIU get document RPC in lieu of this RPC in most cases.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIEN | LITERAL | 15 | true | Internal record number for file 8925 [IEN or IFN]. | 
| ACTION | LITERAL | 10 | true | This parameter is not well documented within TIU.  So for this RPC, do not pass a value at this time.  The default value is \VIEW\. | 




Generated on January 11th 2017, 6:34:23 am