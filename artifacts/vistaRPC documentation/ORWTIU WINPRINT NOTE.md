---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU WINPRINT NOTE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU WINPRINT NOTE{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a formatted global of a TIU document for output to a Windows printdevice.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | TIU print to windows printer
 Input Parameters | {::nomarkdown}ORDA<br/>ORFLG{:/}
 Lines | ```{::nomarkdown} N ZTQUEUED,ORHFS,ORSUB,ORIO,ORSTATUS,ROOT,ORERR,ORWIN,ORHANDLE<br/> N IOM,IOSL,IOST,IOF,IOT,IOS<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORWIN=1,ORHANDLE="ORWTIU"<br/> S ORY=$NA(^TMP(ORSUB,$J,1))<br/> S ORHFS=$$HFS^ORWRP()<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file for TIU print")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D RPC^TIUPD(.ORERR,ORDA,ORIO,ORFLG,ORWIN)<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)```{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Note IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of document in file 8925.{:/} | 
| {::nomarkdown}Chart Copy?{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} |  | {::nomarkdown}If true, print chart copy, else print work copy.{:/} | 




 Generated on January 13th 2017, 7:11:27 am