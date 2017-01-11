---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE PCE4NOTE 

 property | value 
--- | --- 
 label | ORWPCE PCE4NOTE
 tag | PCE4NOTE
 routine | [ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
 return value type | ARRAY
 description | Returns the encounter information for an associated note in the format: LST(1)=HDR^AllowEdit^CPTRequired^VStr^Author^hasCPTLST(n)=TYP+^CODE^CAT^NARR^QUAL1^QUAL2 (QUAL1=Primary!Qty, QUAL2=Prv)


### Method description

 property | value 
--- | --- 
 Method comment | Return encounter for an associated note
 Leading comment lines | LST(1)=HDR^AllowEdit^CPTRequired^VStr^Author^hasCPT,LST(n)=TYP+^CODE^CAT^NARR^QUAL1^QUAL2 (QUAL1=Primary!Qty, QUAL2=Prv)




 ###### Generated on January 11th 2017, 6:39:42 am