---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWD2 DEVINFO 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWD2 DEVINFO{:/}
 tag | {::nomarkdown}DEVINFO{:/}
 routine | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns device information related to a location/nature of order when anorder is signed or released via CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return device info when signing/releasing orders
 Leading comment lines | {::nomarkdown}Y(0)=Prompt Chart ^ Prompt Label ^ Prompt Requisition ^ Prompt Work<br/>^ Chart Device ^ Label Device ^ Requisition Device ^ Work Device<br/>for Prompt X: *=no print, 0=autoprint, 1=prompt&dev 2=prompt only <br/>Y(n)=ORIFN;ACT ^ Chart ^ Label ^ Requisition ^ Service ^ Work<br/>LOC=location (ptr 44), NATR=nature of order (ptr 100.02)<br/>ORDERS=ORIFN;ACT ^ R | S | E (released, signed, error){:/}




 Generated on January 13th 2017, 6:44:47 am