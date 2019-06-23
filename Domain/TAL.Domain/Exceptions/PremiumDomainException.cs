using System;
namespace TAL.Premium.Domain.Exceptions
{
    /// <summary>
    /// Domain Exception
    /// </summary>
    public class PremiumDomainException : Exception
    {
        public PremiumDomainException()
        { }

        public PremiumDomainException(string message)
            : base(message)
        { }

        public PremiumDomainException(string message, Exception innerException)
            : base(message, innerException)
        { }
    }
}
