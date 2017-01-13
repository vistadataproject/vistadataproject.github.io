---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN SVCLIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN SVCLIST{:/}
 tag | {::nomarkdown}SVCLIST{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Because the combo box on the Consults order dialog needs to include ashortlist at the top, a call was needed that returned the list of consultsservices alphabetically as a long list.  This is it.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return a set of consult services in long list format
 Leading comment lines | {::nomarkdown}.ORY=returned list, FROM=text to $O from, DIR=$O direction,{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}StartFrom{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}24{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Starting service for the returned list, full or partial name.{:/} | 
| {::nomarkdown}Direction{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Direction of the lookup.{:/} | 




 Generated on January 13th 2017, 6:44:47 am