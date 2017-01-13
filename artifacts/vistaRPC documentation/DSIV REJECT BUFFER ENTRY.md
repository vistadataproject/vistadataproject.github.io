---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV REJECT BUFFER ENTRY 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV REJECT BUFFER ENTRY{:/}
 tag | {::nomarkdown}REJECT{:/}
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Processes INSURANCE BUFFER file entry to STATUS=REJECT.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IBBUFDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INSURANCE BUFFER file (#355.33) internal entry number to beprocessed (required).{:/} | 
| {::nomarkdown}IVMREPTR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable.{:/} | 




 Generated on January 13th 2017, 7:11:27 am