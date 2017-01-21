---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV DD GET_ADD RECORD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DD GET_ADD RECORD{:/}
 tag | {::nomarkdown}ADD{:/}
 routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This rpc returns the internal entry number to file 228 for a cpt code.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Format:  data = p1 ^ p2  where  p1 = cpt code name (or ien to file 81)  p2 = optional - if p2=1 then add cpt code to file 228       if p2 is undefined or is 0, then lookup ien to file 228,       but do not add if cpt is not in file 228{:/} | 
| {::nomarkdown}KEY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Check which security key this user has. The default value is 'L', or youmay pass 'M'  If L, then see if user owns the local edit security key toedit entries in the local number space (>100,000).  If you pass 'M' thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file.  Regardless of the keyowned, if the record being edited has an ien>100,000 then only fields.01,1,5,6 may be edited.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:13 am</p>{:/}