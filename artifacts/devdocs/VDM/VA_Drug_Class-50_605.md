---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; VA_Drug_Class-50_605<br/>
<a name="top"></a>
# VA Drug Class (50.605)
Per VHA Directive 2005-044, this file has been "locked down" by Data Standardization (DS). The file definition (i.e. data dictionary) shall not be modified. All additions, changes and deletions to entries in the file shall be done by Enterprise Reference Terminology (ERT) using the Master File Server (MFS), provided by Common Services (CS). Creating and/or editing locally defined fields in the file are not permitted. Use of locally defined fields that were created prior to VHA Directive 2005-044 shall not be supported.   This file contains the VA Drug Classifications. Each five-character alpha-numeric code specifies a broad classification and a specific type of product. The first two characters are letters and form the mnemonic for the major classification (e.g., AM for antimicrobials). Characters 3 through 5 are numbers and form the basis for subclassification. The VA Drug Classification system classifies drug products, not generic ingredients. Drug products with local effects are classified by route of administration (e.g., dermatological, ophthalmic). If a product is not classified by route of administration, it is classified in most instances under a specific chemical or pharmacological classification (e.g., beta-blockers, cephalosporins). If a product is not classified by route of administration, or chemical or pharmacological subclassification, it may be classified under a therapeutic category (e.g., antilipemic agents, antiparkinson agents).

**Global:** ^PS(50.605,

**Domain:** Allergies

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Code**{::nomarkdown}<pre><code>  code</code></pre>{:/} | .01 | This is the five alphanumeric character code of the classification. | STRING | INDEXED<br/>REQUIRED | 
**Classification**{::nomarkdown}<pre><code>  classification</code></pre>{:/} | 1 | This is the name of the classification. | STRING |  | 
**Parent Class**{::nomarkdown}<pre><code>  parent_class</code></pre>{:/} | 2 | This is the parent class. | POINTER | INDEXED | [VA_Drug_Class-50_605](VA_Drug_Class-50_605)
**Type**{::nomarkdown}<pre><code>  type-3</code></pre>{:/} | 3 | This is the type of the classification. | ENUMERATION |  | {::nomarkdown}MAJOR: <em><strong>0</strong></em><br/>SUB-CLASS: <em><strong>2</strong></em><br/>MINOR: <em><strong>1</strong></em>{:/}
**Description**{::nomarkdown}<pre><code>  description</code></pre>{:/} | 4 | This is a description of the classification. | STRING |  | 
**Master Entry For VUID**{::nomarkdown}<pre><code>  master_entry_for_vuid</code></pre>{:/} | 99.98 | This field identifies the Master entry for a VUID associated with a Term/Concept. | BOOLEAN | REQUIRED | {::nomarkdown}false: <em><strong>0</strong></em><br/>true: <em><strong>1</strong></em>{:/}
**VUID**{::nomarkdown}<pre><code>  vuid</code></pre>{:/} | 99.99 | VHA Unique ID (VUID). A unique meaningless integer assigned to reference terms VHA wide. | STRING | INDEXED<br/>REQUIRED | 
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | 99.991 | Describes the pair Status and Effective Date/Time for each reference term. | OBJECT |  | [Effective_Date_time-50_60509](#Effective_Date_time-50_60509)

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Effective_Date_time-50_60509"></a>Effective Date/time (50.60509)

<dl>
<dt>ID</dt><dd>Effective_Date_time-50_60509</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Effective Date/time**{::nomarkdown}<pre><code>  effective_date_time</code></pre>{:/} | .01 | This is the date/time when the Status of the term was established. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | .02 | The Status of a reference term is either 'ACTIVE' or 'INACTIVE'. If the term 'ACTIVE', then the term will be accessible by end-users to document a particular  patient event. If 'INACTIVE', then the term will only be accessible by the application<br/>to display legacy data. | ENUMERATION | REQUIRED | {::nomarkdown}ACTIVE: <em><strong>1</strong></em><br/>INACTIVE: <em><strong>0</strong></em>{:/}

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}