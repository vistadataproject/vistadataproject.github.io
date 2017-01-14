---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB GET SET 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB GET SET{:/}
 tag | {::nomarkdown}GETSET{:/}
 routine | [DVBABDDU](http://code.osehra.org/dox/Routine_DVBABDDU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure retrieves the SET OF CODES for a given file and field for use in populating controls.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBFIL{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This paramater contains a valid file number.{:/} | 
| {::nomarkdown}DVBFLD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains a field in the file passed as DVBFIL.{:/} | 




 Generated on January 13th 2017, 7:15:28 am