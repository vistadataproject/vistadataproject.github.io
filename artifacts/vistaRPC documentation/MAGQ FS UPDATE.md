---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ FS UPDATE 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGQ FS UPDATE{:/}
 tag | {::nomarkdown}FSUPDT{:/}
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Updates the online file server entries in the Network location filewith the disk size and the space available.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The network location file (#2005.2) internal entry number of the recordto be updated. {:/} | 
| {::nomarkdown}SPACE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The amount of space available for copying images.{:/} | 
| {::nomarkdown}SIZE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The disk capacity of the network share.{:/} | 




 Generated on January 13th 2017, 5:52:13 am