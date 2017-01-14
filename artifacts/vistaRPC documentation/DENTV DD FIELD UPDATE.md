---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DENTV DD FIELD UPDATE 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DD FIELD UPDATE{:/}
 tag | {::nomarkdown}FILE{:/}
 routine | [DENTVRP3](http://code.osehra.org/dox/Routine_DENTVRP3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call will allow the updating of certain fields in file 228.You can delete a locally added medical CPT code.You can edit the diagnosis codes mapped to any CPT code.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DATA(1) = ien for file 228DATA(n) = <file 228 field number> ^ new value          n = 2,3,4,5,6,7 The only acceptable fields are .01,.18,.16,1.14,1.15,3,5For field .01, the only accpetable values are <null> or \@\ indicating the desire to delete the entry. For field .16, the acceptable value is the IEN to the VA DSS Product line.  For field 5 the acceptable value is the external Dx code.  There must be at least one Dx code for each procedure.  If the other data is not sent, it will be deleted in the database.   Example: DATA(1)=100268            DATA(2)=\.18^30\       RVU            DATA(3)=\.16^1\        PRODUCT LINE IEN            DATA(4)=\1.14^500.00\  VA COST            DATA(5)=\1.15^555.00\  EQUIV PRIVATE COST            DATA(7)=\3^\           ADMIN GUIDELINE            DATA(8)=\5^528.3\      PRIMARY DEFAULT DX  the first entry             DATA(9)=\5^528.5\      ADDITIONAL DEFAULT DX              DATA(10)=\5^528.09\    ADDITIONAL DEFAULT DX            DATA(11)=\5^525.40\    ADDITIONAL DEFAULT DX            DATA(12)=\5^V60.0\     ADDITIONAL DEFAULT DX{:/} | 
| {::nomarkdown}KEY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Check which security key this user has. The default value is 'L', or youmay pass 'M'  If L, then see if user owns the local edit security key toedit entries in the local number space (>100,000).  If you pass 'M' thenthis will check to see if the user owns the VACO security key and if sothen the user can edit any entry in the file.{:/} | 




 Generated on January 14th 2017, 7:26:35 am