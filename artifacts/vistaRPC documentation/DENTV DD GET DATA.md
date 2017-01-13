---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV DD GET DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DD GET DATA{:/}
 tag | {::nomarkdown}GTD{:/}
 routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Pass this RPC a cpt code and it will return the data stored in file 228{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CODE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}6{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the CPT code name.  You can also send the ien to file 81 (CPT){:/} | 
| {::nomarkdown}KEY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Check which security key this user has. The default value is 'L', or youmay pass 'M'  If L, then see if user owns the local edit security key toedit entries in the local number space (>100,000).  If you pass 'M' thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file.{:/} | 




 Generated on January 13th 2017, 6:44:47 am