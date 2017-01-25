---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC LOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC LOCK{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [DSICLOCK](http://code.osehra.org/dox/Routine_DSICLOCK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will allow a GUI application issue a LOCK or UNLOCK on a global node or a record in a file.  If the LOCK is issued, it is the responsibility of the application to issue the UNLOCK.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}128{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This can be a closed form of a global or it can be a file number.  If it is a file number, then IFN is also required.  The file number can be the file number of the entire file or the subfile number of corresponding to the ^DD() value.  If it is a subfile, then the IFN parameter must be set accordingly. Examples of globals:  ^DSI(19621,0) - since there is no record number the global name has to                  be passed  ^DSI(19621,\B\){:/} | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number (record number) of the record that you wish to lock or unlock in the file specified in the REF parameter.  IFN is required if the REF parameter is a file or subfile number. IFN is the IEN if you are locking the entire record.  If you are locking a subrecord in a multiple, the IFN must be a proper IENS at the appropriate level as documented in the Fileman DBS manuals.{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This flag indicates whether or not the global reference should be locked or unlocked.  The default value is 1 which means to lock the global.  If it has a value of -1 then unlock the global reference.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}