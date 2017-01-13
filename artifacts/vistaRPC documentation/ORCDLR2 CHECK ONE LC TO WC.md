---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORCDLR2 CHECK ONE LC TO WC 

 property | value 
--- | --- 
 label | {::nomarkdown}ORCDLR2 CHECK ONE LC TO WC{:/}
 tag | {::nomarkdown}KIDS{:/}
 routine | [ORCDLR2](http://code.osehra.org/dox/Routine_ORCDLR2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
--- | --- 
 Method comment | get child times, validate LC/IC
 Leading comment lines | ORL   = Hospital Location file #44 vptr
ORIFN = Orders file #100 ien
or
DATE  = Start date.time or "AM" or "NEXT"
TYPE  = LC or I
SCH   = Administration Schedule file #51.1 ien
DUR   = # or "X"_#
Will quit if OREVENT exists <can't check delayed orders>
Returns ORY(n) = child start.time ^ 1 or 0 ^ [error message]




 Generated on January 13th 2017, 5:52:13 am