---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV EXTRACT REC 

 property | value 
--- | --- 
 label | GMV EXTRACT REC
 tag | GETVM
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call retrieves vital records from the GMRV VitalMeasurement (#120.5) file for a selected patient within a given date span. This remote procedure call is documented in Integration Agreement 4416.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMRVDATA | LITERAL | 30 | true | GMRVDATA consists of 4 pieces of information: piece1^piece2^piece3^piece4  where piece1 = Patient (#2) file pointer (i.e., DFN)       piece2 = End date of search (FileMan internal format)       piece3 = single vital type abbreviation (File 120.51, Field 1)                [optional] If not defined, the default is                \T;P;R;BP;HT;WT;PN;PO2;CG;CVP\       piece4 = Start date of search (FileMan internal format) | 