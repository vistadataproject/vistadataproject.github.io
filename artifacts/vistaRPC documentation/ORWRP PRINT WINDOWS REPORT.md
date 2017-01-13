---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP PRINT WINDOWS REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP PRINT WINDOWS REPORT{:/}
 tag | {::nomarkdown}PRINTW{:/}
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Prints CPRS GUI information to windows printer.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Windows device print
 Input Parameters | {::nomarkdown}ORDFN<br/>ORRPTID<br/>ORHSTYPE<br/>ORDTRNG<br/>OREXAMID<br/>ORCOMP<br/>ORALPHA<br/>OROMEGA{:/}
 Lines | ```{::nomarkdown} N ZTQUEUED,ORHFS,ORSUB,ROOT,ORIO,ORHANDLE,ORWINDEV<br/> N IOM,IOSL,IOST,IOF,IOT,IOS,ORHSTAG,POP<br/> S ORHSTAG=$P($G(ORRPTID),"~",2),ORRPTID=$P($G(ORRPTID),"~"),ORRPTID=$P($P(ORRPTID,";"),":")<br/> S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORTEXT=$NA(^TMP(ORSUB,$J,1)),ORHANDLE="ORWRP"<br/> I '$$CHK() S @ORTEXT@(0)=ORY G PRINTWQ<br/> S ORHFS=$$HFS^ORWRP(),ORWINDEV=1 ;Flag for printing to windows device<br/> D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")<br/> I POP D  Q<br/> . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file")<br/> D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")<br/> N $ETRAP,$ESTACK<br/> S $ETRAP="D ERR^ORWRP Q"<br/> U IO<br/> D DEQUE<br/> D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)```{:/}




 Generated on January 13th 2017, 7:11:27 am