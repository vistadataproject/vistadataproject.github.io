---
layout: default
title: RPCL documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV MARK ERROR 

 property | value 
--- | --- 
 name-8994 | GMV MARK ERROR
 tag-8994 | ERROR
 routine-8994 | GMVUTL1
 return_value_type-8994 | SINGLE VALUE
 description-8994 | This remote procedure call marks a selected vitals record in the GMRVVital Measurement (#120.5) file as entered-in-error. This remote procedure call is documented in Integration Agreement 4414.

### Input Parameters

| type | input_parameter-8994_02 | parameter_type-8994_02 | maximum_data_length-8994_02 | required-8994_02 | description-8994_02 | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMVDATA | LITERAL | 60 | true | GMVDATA contains the following information:  piece1^piece2^piece3  where piece1 = FILE 120.5 IEN        piece2 = FILE 200 IEN (i.e., DUZ)       piece3 = A single value to indicate the reason for the error.                1 = INCORRECT DATE/TIME, 2 = INCORRECT READING, 3 =                INCORRECT PATIENT and 4 = INVALID RECORD | 