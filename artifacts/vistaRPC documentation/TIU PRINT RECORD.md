---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU PRINT RECORD 

 property | value 
--- | --- 
 label | TIU PRINT RECORD
 tag | RPC
 routine | [TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
 return value type | SINGLE VALUE
 description | Allows Printing of TIU Documents on demand.


### Method description

 property | value 
--- | --- 
 Method comment | Remote Procedure to print a record
 Leading comment lines | TIUFLAG > 1 Chart Copy, TIUFLAG = 2 Electronically signed Chart Copy,TIUWIN = 1 Windows printer, 0 or "" VistA printer

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number of the document in the TIU DOCUMENT FILE(#8925). It uniquely identifies the document to be printed. | 
| TIUIO | LITERAL |  | true | This is the NAME of the device to which the document is to be printed. NOTE: You may not pass the $I for the device, or the Pointer to the DEVICEFILE entry corresponding to the device.  ONLY THE DEVICE NAME will work. | 
| TIUFLAG | LITERAL |  | true | This is a flag which tells the print driver to specify a CHART versus WORKcopy of the document.  If it is undefined or its value is 0, then theprinted copy will be marked as a WORK COPY.  If its value is 1, then itwill be marked as a CHART COPY. | 




Generated on January 11th 2017, 6:34:23 am