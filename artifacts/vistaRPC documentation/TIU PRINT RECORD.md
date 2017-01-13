---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU PRINT RECORD 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU PRINT RECORD{:/}
 tag | {::nomarkdown}RPC{:/}
 routine | [TIUPD](http://code.osehra.org/dox/Routine_TIUPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Allows Printing of TIU Documents on demand.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Remote Procedure to print a record
 Leading comment lines | {::nomarkdown}TIUFLAG > 1 Chart Copy, TIUFLAG = 2 Electronically signed Chart Copy<br/>TIUWIN = 1 Windows printer, 0 or "" VistA printer{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the record number of the document in the TIU DOCUMENT FILE(#8925). It uniquely identifies the document to be printed.{:/} | 
| {::nomarkdown}TIUIO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the NAME of the device to which the document is to be printed. NOTE: You may not pass the $I for the device, or the Pointer to the DEVICEFILE entry corresponding to the device.  ONLY THE DEVICE NAME will work.{:/} | 
| {::nomarkdown}TIUFLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a flag which tells the print driver to specify a CHART versus WORKcopy of the document.  If it is undefined or its value is 0, then theprinted copy will be marked as a WORK COPY.  If its value is 1, then itwill be marked as a CHART COPY.{:/} | 




 Generated on January 13th 2017, 6:44:47 am