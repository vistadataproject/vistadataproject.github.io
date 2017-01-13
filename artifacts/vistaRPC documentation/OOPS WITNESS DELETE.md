---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS WITNESS DELETE 

 property | value 
--- | --- 
 label | {::nomarkdown}OOPS WITNESS DELETE{:/}
 tag | {::nomarkdown}DELWITN{:/}
 routine | [OOPSGUI2](http://code.osehra.org/dox/Routine_OOPSGUI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The broker call will remove witness information (stored in node \CA1W\) fromthe 2260 file.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The INPUT parm will contain the IEN of the case in the 2260 file, and thewitness number in the format IEN^WITNESS NUMBER. The witness number is the subfield indentification as such... ^OOPS(2260,170,\CA1W\,3,0)  3 BEING THE WITNESS NUMBER.{:/} | 




 Generated on January 13th 2017, 7:11:27 am