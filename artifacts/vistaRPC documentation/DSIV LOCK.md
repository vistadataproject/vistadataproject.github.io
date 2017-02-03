---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV LOCK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV LOCK{:/}
 tag | {::nomarkdown}LOCK{:/}
 routine | [DSIVLOCK](http://code.osehra.org/dox/Routine_DSIVLOCK_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Lock or unlock a global reference from a GUI client{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FM file number or $NAME(global) to be locked{:/} | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Required if REF is a file (or subfile) numberIf REF is the top level file number, then IFN is the  IEN of the recordIf REF is a subdictionary number for a multiple, then  IFN must be the appropriate IENS for that multiple  level{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag for locking or unlocking  1: Lock -1: Unlock Defaults to 1{:/} | 
| {::nomarkdown}FUN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag to indicate if the call is extrinsic or RPC   1: Extrinsic  0: RPC{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:06 am</p>{:/}