---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DS URGENCIES 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DS URGENCIES{:/}
 tag | {::nomarkdown}URGENCY{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a set of discharge summary urgencies for use in a long list box.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | retrieve set values from dd for discharge summary urgency
 Lines | ```
 N TIUDD,TIUI,TIUX
 D FIELD^DID(8925,.09,"","POINTER","TIUDD")
 F TIUI=1:1 S TIUX=$P(TIUDD("POINTER"),";",TIUI) Q:TIUX=""   S TIUY(TIUI)=$TR(TIUX,":","^")```




 Generated on January 13th 2017, 6:55:28 am