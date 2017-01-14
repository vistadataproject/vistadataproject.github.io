---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAGQ VCUD 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ VCUD{:/}
 tag | {::nomarkdown}VCUD{:/}
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call is to update the Image file VMC file references.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Pointer{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the network location file IEN.{:/} | 
| {::nomarkdown}Extension{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the image file extension of the file whose network reference is inneed of updating.{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IMAGE file (#2005) internal entry number.{:/} | 




 Generated on January 14th 2017, 7:26:35 am