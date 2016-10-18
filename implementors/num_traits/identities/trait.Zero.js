(function() {var implementors = {};
implementors["num_traits"] = [];implementors["num_complex"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_traits/trait.Num.html' title='num_traits::Num'>Num</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_complex/struct.Complex.html' title='num_complex::Complex'>Complex</a>&lt;T&gt;",];implementors["num_bigint"] = ["impl <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_bigint/struct.BigUint.html' title='num_bigint::BigUint'>BigUint</a>","impl <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_bigint/struct.BigInt.html' title='num_bigint::BigInt'>BigInt</a>",];implementors["num_rational"] = ["impl&lt;T:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num_integer/trait.Integer.html' title='num_integer::Integer'>Integer</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='num_rational/struct.Ratio.html' title='num_rational::Ratio'>Ratio</a>&lt;T&gt;",];implementors["nalgebra"] = ["impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec1.html' title='nalgebra::Vec1'>Vec1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec2.html' title='nalgebra::Vec2'>Vec2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec3.html' title='nalgebra::Vec3'>Vec3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec4.html' title='nalgebra::Vec4'>Vec4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec5.html' title='nalgebra::Vec5'>Vec5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec6.html' title='nalgebra::Vec6'>Vec6</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Quat.html' title='nalgebra::Quat'>Quat</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Mat1.html' title='nalgebra::Mat1'>Mat1</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Mat2.html' title='nalgebra::Mat2'>Mat2</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Mat3.html' title='nalgebra::Mat3'>Mat3</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Mat4.html' title='nalgebra::Mat4'>Mat4</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Mat5.html' title='nalgebra::Mat5'>Mat5</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a>&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Mat6.html' title='nalgebra::Mat6'>Mat6</a>&lt;N&gt;","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/struct.Vec0.html' title='nalgebra::Vec0'>Vec0</a>&lt;N&gt;",];implementors["bio"] = ["impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec1.html' title='nalgebra::structs::vec::Vec1'>Vec1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec2.html' title='nalgebra::structs::vec::Vec2'>Vec2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec3.html' title='nalgebra::structs::vec::Vec3'>Vec3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec4.html' title='nalgebra::structs::vec::Vec4'>Vec4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec5.html' title='nalgebra::structs::vec::Vec5'>Vec5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec6.html' title='nalgebra::structs::vec::Vec6'>Vec6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/quat/struct.Quat.html' title='nalgebra::structs::quat::Quat'>Quat</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/mat/struct.Mat1.html' title='nalgebra::structs::mat::Mat1'>Mat1</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/mat/struct.Mat2.html' title='nalgebra::structs::mat::Mat2'>Mat2</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/mat/struct.Mat3.html' title='nalgebra::structs::mat::Mat3'>Mat3</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/mat/struct.Mat4.html' title='nalgebra::structs::mat::Mat4'>Mat4</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/mat/struct.Mat5.html' title='nalgebra::structs::mat::Mat5'>Mat5</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/mat/struct.Mat6.html' title='nalgebra::structs::mat::Mat6'>Mat6</a>&lt;N&gt; <span class='where'>where N: <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a></span>","impl&lt;N&gt; <a class='trait' href='num_traits/identities/trait.Zero.html' title='num_traits::identities::Zero'>Zero</a> for <a class='struct' href='nalgebra/structs/vec/struct.Vec0.html' title='nalgebra::structs::vec::Vec0'>Vec0</a>&lt;N&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
