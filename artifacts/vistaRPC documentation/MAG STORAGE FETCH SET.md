---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG STORAGE FETCH SET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG STORAGE FETCH SET{:/}
 tag | {::nomarkdown}SETLOC{:/}
 routine | [MAGSFTCH](http://code.osehra.org/dox/Routine_MAGSFTCH_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Sets the network location pieces 3 and 4 of the IMAGE file (#2005) 0 nodeor update the WORM network location reference piece 5 in 0 node,or update the BIG file reference in \FBIG\ node.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Image IEN{:/} | 
| {::nomarkdown}NTLOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of NETWORK LOCATION file (#2005.2) to be set in IMAGE file (#2005).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}