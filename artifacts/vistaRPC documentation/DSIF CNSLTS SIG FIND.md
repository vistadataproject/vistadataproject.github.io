---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SIG FIND 

 property | value 
--- | --- 
 label | DSIF CNSLTS SIG FIND
 tag | SIGFIND
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for Significant Findings updates to be added to a Consult. Cloned from ORQQCN SIG FIND

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCIEN | LITERAL |  | true | This is the Consult IEN for the consult you wish to add a significant findings update to. | 
| vs:Input_Parameter-8994_02 | DSIFSF | LITERAL | 1 | true | The flag for what type of significant finding update is being added: 'Y' - Significant Finding'N' - No Significant Finding'U' - Unknown Significant Finding | 
| vs:Input_Parameter-8994_02 | DSIFCOM | LIST | 80 | true | This is array of comments being added to the Consult along with the Significant Findings update. | 
| vs:Input_Parameter-8994_02 | DSIFALRT | LITERAL | 1 | true | Flag to signal that alerts are to be sent: 'N' - NO'Y' - YES | 
| vs:Input_Parameter-8994_02 | DSIFALTO | LITERAL | 80 |  | A list of comma delimited NEW PERSON FILE (200) iens who need to be alerted to the significant finding update for this consult. | 
| vs:Input_Parameter-8994_02 | DSIFDT | LITERAL |  | true | The date of the significant finding update. | 