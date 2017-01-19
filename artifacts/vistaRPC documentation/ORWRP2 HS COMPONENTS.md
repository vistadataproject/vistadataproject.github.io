---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP2 HS COMPONENTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP2 HS COMPONENTS{:/}
 tag | {::nomarkdown}COMP{:/}
 routine | [ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns an array of the ADHOC Health Summary components.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | COMP^[ORWRP2](http://code.osehra.org/dox/Routine_ORWRP2_source.html)
 Method comment | Get ADHOC sub components (FILE 142.1)
 First comment | {::nomarkdown}<pre>RPC => ORWRP2 HS COMPONENTS<br/>Y(i)=(1)I;IFN^(2)Component Name [Abb]^(3)Occ Limit^(4)Time Limit^(5)Header Name^<br/>     (6)Hosp Loc Disp^(7)ICD Text Disp^(8)Prov Narr Disp^(9)Summary Order</pre>{:/}
 Code | {::nomarkdown}  D COMP^GMTSADH5(.ORY){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}