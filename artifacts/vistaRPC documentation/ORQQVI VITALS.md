---
layout: default
title: RPCL documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQVI VITALS 

 property | value 
--- | --- 
 name-8994 | ORQQVI VITALS
 tag-8994 | FASTVIT
 routine-8994 | ORQQVI
 return_value_type-8994 | ARRAY
 description-8994 | Array of patient most recent vitals within start and stop date/times.  Ifno start and stop dates are indicated, the most recent are returned. If no start date is passed then the start date is 1 (i.e. before anydates). If no stop date is passed then the start date is also the stop date and ifthere is not start date then 9999999 is used as the stop date.
 input_parameter-8994 | [{id:8994_02-1_171,type:vs:Input_Parameter-8994_02,input_parameter-8994_02:PATIENT ID,parameter_type-8994_02:LITERAL,maximum_data_length-8994_02:16,required-8994_02:true,description-8994_02:Patient id (DFN) from Patient File (#2).},{id:8994_02-2_171,type:vs:Input_Parameter-8994_02,input_parameter-8994_02:START DATE/TIME,parameter_type-8994_02:LITERAL,maximum_data_length-8994_02:16,description-8994_02:Start date/time for vital retrieval in Fileman format.If none is passed then the start date is 1 (i.e. before any dates).},{id:8994_02-3_171,type:vs:Input_Parameter-8994_02,input_parameter-8994_02:STOP DATE/TIME,parameter_type-8994_02:LITERAL,maximum_data_length-8994_02:16,description-8994_02:Stop date/time for vital retrieval in Fileman format.If none is passed then the Start date is also the stop date and if thereis not start date then 9999999 is used as the stop date}]

### Input Parameters

| type | input_parameter-8994_02 | parameter_type-8994_02 | 
| --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT ID | LITERAL | 
| vs:Input_Parameter-8994_02 | START DATE/TIME | LITERAL | 
| vs:Input_Parameter-8994_02 | STOP DATE/TIME | LITERAL | 