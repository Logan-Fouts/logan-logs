# Architecture Elements, Components, and Interfaces

### AWS Prescriptive Guidance (Decomposing monoliths into micro services)

- In order to take advantage of AWS you should refactor monoliths into micro services. This involves three steps:
  1. Decompose monoliths into micro services- Use the decomposition patterns provided to do so.
  2. Integrate micro services- Integrate the newly created micro services into a micro services architecture by using AWS server-less services.
  3. Enable data persistence for micro services- Promote polyglot persistence among you micro services by decentralizing data stores.
     - polyglot persistence Independently choosing a micro service's data storage technology based on data access patterns and other requirements. If your micro services have the same data storage technology, they can encounter implementation challenges or experience poor performance. Micro services are more easily implemented and achieve better performance and scalability if they use the data store best adapted to their requirements. For more information, see Enabling data persistence in micro services
- The poorly defined internal structures of a monolith can make it difficult to maintain code, which creates a steep learning curve for new developers and causes additional support costs.
- Four cloud-native patterns that are used to decompose monoliths:
  - Decompose by business capability
  - Decompose by subdomain
  - Decompose by transactions
  - Service per team pattern
- You should expect the following outcomes after you decompose your monoliths into micro services:
- An efficient transition of your monolithic application into a micro services architecture.
- Rapid adjustments to fluctuating business demand but without interrupting core activities, such as high scalability, improved resiliency, continuous delivery, and failure isolation.
- Faster innovation because each micro service can be individually tested and deployed.
- Note:
  - You can use multiple patterns to decompose a monolith. For example, you can decompose a monolith by business capability and then use the subdomain pattern to break it down more.

#### Decompose by business capability

- A business capability is what a business does to generate value (for example, sales, customer service, or marketing).
- Use this pattern if your team has enough insight into your organization's business units and you have subject matter experts (SMEs) for each business unit.

#### Decompose by subdomain

- This pattern uses a domain driven design (DDD) subdomain to decompose monoliths.
- Break down and organization's domain model into separate subdomains that are labeled as core (a key differentiator for the business), supporting (possibly related to business but not a differentiator), or generic (not business-specific).
- This pattern is appropriate for existing monolithic systems that have well-defined boundaries between subdomain-related modules. This means you can decompose the monolith by repackaging existing modules as micro services but without significantly rewriting existing code. Each subdomain has a model and the scope of that model is called a bounded context; micro services are developed around this bounded context.
