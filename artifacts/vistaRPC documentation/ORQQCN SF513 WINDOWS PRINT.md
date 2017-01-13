---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SF513 WINDOWS PRINT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SF513 WINDOWS PRINT{:/}
 tag | {::nomarkdown}WPRT513{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Print consults Standard Form 513 to Windows device from GUI application.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Print SF513 to Windows device from GUI
 Input Parameters | {::nomarkdown}GMRCO<br/>GMRCCHT{:/}
 Lines | ```
 N ZTQUEUED,ORHFS,ORSUB,ORIO,ORSTATUS,ROOT,ORHANDLE
 N IOM,IOSL,IOST,IOF,IOT,IOS
 S (ORSUB,ROOT)="ORDATA",ORIO="OR WINDOWS HFS",ORHANDLE="ORQQCN2"
 S ORY=$NA(^TMP(ORSUB,$J,1))
 S ORHFS=$$HFS^ORWRP()
 D HFSOPEN^ORWRP(ORHANDLE,ORHFS,"W")
 I POP D  Q
 . I $D(ROOT) D SETITEM^ORWRP(.ROOT,"ERROR: Unable to open HFS file for SF513 print")
 D IOVAR^ORWRP(.ORIO,,,"P-WINHFS80")
 N $ETRAP,$ESTACK
 S $ETRAP="D ERR^ORWRP Q"
 U IO
 D PRNT^GMRCP5A(GMRCO,0,0,GMRCCHT,0)
 D HFSCLOSE^ORWRP(ORHANDLE,ORHFS)```




 Generated on January 13th 2017, 6:55:29 am