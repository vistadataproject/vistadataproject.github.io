---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV REJECT BUFFER ENTRY 

 property | value 
--- | --- 
 label | DSIV REJECT BUFFER ENTRY
 tag | REJECT
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | SINGLE VALUE
 description | Processes INSURANCE BUFFER file entry to STATUS=REJECT.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBBUFDA | LITERAL | 16 | true | INSURANCE BUFFER file (#355.33) internal entry number to beprocessed (required). | 
| IVMREPTR | LITERAL | 4 | true | Internal entry number in IVM REASONS FOR NOT UPLOADING INSURANCEfile (#301.91) if applicable. | 