
##[VDM](TableOfContent.md) --> VA_Drug_Class-50_605 

 property | value 
--- | --- 
 id | VA_Drug_Class-50_605
 fmId | 50.605
 label | VA Drug Class
 location | ^PS(50.605,
 description | Per VHA Directive 2005-044, this file has been \locked down\\rby Data Standardization (DS). The file definition (i.e. data dictionary)\rshall not be modified. All additions, changes and deletions to entries in\rthe file shall be done by Enterprise Reference Terminology (ERT) using the\rMaster File Server (MFS), provided by Common Services (CS). Creating and/or\rediting locally defined fields in the file are not permitted. Use of\rlocally defined fields that were created prior to VHA Directive\r2005-044 shall not be supported.\r \rThis file contains the VA Drug Classifications. Each five-character\ralpha-numeric code specifies a broad classification and a specific\rtype of product. The first two characters are letters and form the\rmnemonic for the major classification (e.g., AM for antimicrobials).\rCharacters 3 through 5 are numbers and form the basis for subclassification.\rThe VA Drug Classification system classifies drug products, not\rgeneric ingredients. Drug products with local effects are classified\rby route of administration (e.g., dermatological, ophthalmic). If a\rproduct is not classified by route of administration, it is classified\rin most instances under a specific chemical or pharmacological\rclassification (e.g., beta-blockers, cephalosporins). If a product\ris not classified by route of administration, or chemical or\rpharmacological subclassification, it may be classified under a\rtherapeutic category (e.g., antilipemic agents, antiparkinson agents).

###Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| code | .01 | Code | This is the five alphanumeric character code of the classification. | STRING |  | REQUIRED, INDEXED |  | 
| classification | 1 | Classification | This is the name of the classification. | STRING |  |  |  | 
| parent_class | 2 | Parent Class | This is the parent class. | POINTER |  | INDEXED | {id:VA_Drug_Class-50_605} | 
| type-3 | 3 | Type | This is the type of the classification. | ENUMERATION |  |  | <dl><dt>0</dt><dd>MAJOR</dd><dt>2</dt><dd>SUB-CLASS</dd><dt>1</dt><dd>MINOR</dd></dl> | 
| description | 4 | Description | This is a description of the classification. | STRING |  |  |  | 
| master_entry_for_vuid | 99.98 | Master Entry For VUID | This field identifies the Master entry for a VUID associated with a Term/Concept. | BOOLEAN |  | REQUIRED | {false:0,true:1} | 
| vuid | 99.99 | VUID | VHA Unique ID (VUID). A unique meaningless integer assigned to reference terms VHA wide. | STRING |  | REQUIRED, INDEXED |  | 
| effective_date_time | 99.991 | Effective Date/time | Describes the pair Status and Effective Date/Time for each reference term. | [OBJECT] |  |  | [Effective_Date_time-50_60509](#effective_date_time-50_60509)  | 

##Effective_Date_time-50_60509 

 property | value 
--- | --- 
 id | Effective_Date_time-50_60509
 label | Effective Date/time

###Properties

| id | fmId | label | description | datatype | location | attributes | range | 
| --- | --- | --- | --- | --- | --- | --- | --- | 
| effective_date_time | .01 | Effective Date/time | This is the date/time when the Status of the term was established. | DATE-TIME |  | REQUIRED, INDEXED |  | 
| status | .02 | Status | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If the term 'ACTIVE', then the term will be accessible by end-users to document a particular  patient event. If 'INACTIVE', then the term will only be accessible by the application\rto display legacy data. | ENUMERATION |  | REQUIRED | <dl><dt>1</dt><dd>ACTIVE</dd><dt>0</dt><dd>INACTIVE</dd></dl> | 