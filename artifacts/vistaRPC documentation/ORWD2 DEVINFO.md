---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWD2 DEVINFO 

 property | value 
--- | --- 
 label | ORWD2 DEVINFO
 tag | DEVINFO
 routine | [ORWD2](http://code.osehra.org/dox/Routine_ORWD2_source.html)
 return value type | ARRAY
 description | Returns device information related to a location/nature of order when anorder is signed or released via CPRS GUI.


### Method description

 property | value 
--- | --- 
 Method comment | Return device info when signing/releasing orders
 Leading comment lines | Y(0)=Prompt Chart ^ Prompt Label ^ Prompt Requisition ^ Prompt Work,^ Chart Device ^ Label Device ^ Requisition Device ^ Work Device,for Prompt X: *=no print, 0=autoprint, 1=prompt&dev 2=prompt only ,Y(n)=ORIFN;ACT ^ Chart ^ Label ^ Requisition ^ Service ^ Work,LOC=location (ptr 44), NATR=nature of order (ptr 100.02),ORDERS=ORIFN;ACT ^ R | S | E (released, signed, error)




 Generated on January 11th 2017, 7:15:04 am