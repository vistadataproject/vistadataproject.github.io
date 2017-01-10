---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ADD BUFFER ENTRY 

 property | value 
--- | --- 
 label | DSIV ADD BUFFER ENTRY
 tag | ADDBUF
 routine | [DSIVIC](http://code.osehra.org/dox/Routine_DSIVIC_source.html)
 return value type | SINGLE VALUE
 description | Adds a new entry to the INSURANCE BUFFER file #355.33.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Patient internal entry number. | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL | 1 | true | \M\ for Medicare, \X\ for all other insurance (default). | 
| vs:Input_Parameter-8994_02 | INSCO | LITERAL | 30 | true | Insurance company name.  Required for non-Medicare insurance.Not required for Medicare type. | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 80 | true | Array of keyword^value pairs for Medicare type entry orField number^value pairs for other insurance type entries.For example, SOURCE is a required value.  For non-Medicareentries this could be specified as DATA(1)=\.03^1\, meaningsource=interview. | 